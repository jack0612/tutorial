/**
 * Exports reducers and selectors of the ngrx-normalizr package.
 */

import { Action, createReducer, createSelector, MemoizedSelector, on, resultMemoize } from '@ngrx/store';
import { denormalize, normalize, schema } from 'normalizr';

import { NormalizeActionTypes, setDataMine } from '../actions/ngrx-normalizr-mine.actions';
import {
	INormalizeChildActionPayload,
	INormalizeRemoveChildActionPayload
} from '../actions/ngrx-normalizr-mine.actions';

/**
 * The state key under which the normalized state will be stored
 */
const STATE_KEY = 'normalized';

/**
 * Interface describing the entities propery of a normalized state.
 * A map of schema keys wich map to a map of entity id's to entity data.
 * This corresponds to the `entities` property of a `normalizr.normalize` result.
 */
export interface IEntityMap {
	[key: string]: { [id: string]: any };
}

/**
 * The state interface from which the app state should extend.
 * Holds an instance of `NormalizedEntityState` itself.
 */
export interface INormalizedState {
	/** The normalized state property */
	normalized: INormalizedEntityState;
}

/**
 * The normalized state, representing a `normalizr.normalize` result.
 * Can be selected by the provided `getNormalizedEntities` and `getResult`
 * selectors.
 */
export interface INormalizedEntityState {
	/**
	 * The original sorting of the unnormalized data.
	 * Holds all id's of the last set operation in original order.
	 * Can be used to restore the original sorting of entities
	 */
	result: string[];

	/**
	 * The normalized entities. Should be passed to all projector functions
	 * to enable access to all entities needed.
	 */
	entities: IEntityMap;
}

/**
 * The initial state for the normalized entity state.
 */
const initialState: INormalizedEntityState = {
	result: [],
	entities: {}
};

/**
 * The normalizing reducer function which will handle actions with the types
 * `NormalizeActionTypes.SET_DATA`, `NormalizeActionTypes.ADD_DATA` and `NormalizeActionTypes.REMOVE_DATA`.
 *
 * On an `NormalizeActionTypes.SET_DATA` action:
 *
 * All entities and childs of the given schema will be replaced with the new entities.
 *
 * On an `NormalizeActionTypes.ADD_DATA` action:
 *
 * Entities are identified by their id attribute set in the schema passed by the payload.
 * Existing entities will be overwritten by updated data, new entities will be added to the store.
 *
 * On an `NormalizeActionTypes.REMOVE_DATA` action:
 *
 * Entities are identified by their id attribute set in the schema passed by the payload.
 * The entity with the passed id will be removed. If a `removeChildren` option is set in the action
 * payload, it is assumed as a map of schema keys to object property names. All referenced children
 * of the entity will be read by the object propety name and removed by the schema key.
 *
 * @param state The current state
 * @param action The dispatched action, one of `NormalizeActionTypes.ADD_DATA` or `NormalizeActionTypes.REMOVE_DATA`.
 */
export function normalized(
	state: INormalizedEntityState = initialState,
	action: any
) {
	switch (action.type) {
		case NormalizeActionTypes.SET_DATA: {
			const { result, entities } = action.payload;

			return {
				result,
				entities: {
					...state.entities,
					...entities
				}
			};
		}

		case NormalizeActionTypes.ADD_DATA: {
			const { result, entities } = action.payload;
			console.log('33333 action.payload', action.payload)
			return {
				result,
				entities: Object.keys(entities).reduce(
					(p: any, c: string) => {
						p[c] = { ...p[c], ...entities[c] };
						return p;
					},
					{ ...state.entities }
				)
			};
		}

		case NormalizeActionTypes.ADD_CHILD_DATA: {
			const {
				result,
				entities,
				parentSchemaKey,
				parentProperty,
				parentId
			} = action.payload as INormalizeChildActionPayload;
			const newEntities = { ...state.entities };

			/* istanbul ignore else */
			if (getParentReferences(newEntities, action.payload)) {
				newEntities[parentSchemaKey][parentId][parentProperty].push(...result);
			}

			return {
				result,
				entities: Object.keys(entities).reduce((p: any, c: string) => {
					p[c] = { ...p[c], ...entities[c] };
					return p;
				}, newEntities)
			};
		}

		case NormalizeActionTypes.UPDATE_DATA: {
			const { id, key, changes, result } = action.payload;

			if (!state.entities[key] || !state.entities[key][id]) {
				return state;
			}

			const newEntities = { ...state.entities };
			Object.entries(changes).forEach(([key, value]: [string, any]) => {
				Object.entries(changes[key]).forEach(([id, obj]: [string, any]) => {
					newEntities[key][id] = newEntities[key][id] || {};
					Object.entries(changes[key][id]).forEach(
						([property, value]: [string, any]) => {
							if (Array.isArray(value)) {
								newEntities[key][id][property].push(...value);
							} else {
								newEntities[key][id][property] = value;
							}
						}
					);
				});
			});

			return {
				result,
				entities: newEntities
			};
		}

		case NormalizeActionTypes.REMOVE_DATA: {
			const { id, key, removeChildren } = action.payload;
			const entities = { ...state.entities };
			const entity = entities[key][id];
			console.log('44444 state', state, entity)
			console.log('44444 state', entities)
			if (!entity) {
				return state;
			}

			if (removeChildren) {
				Object.entries(removeChildren).map(
					([key, entityProperty]: [string, string]) => {
						const child = entity[entityProperty];

						if (child && entities[key]) {
							const ids = Array.isArray(child) ? child : [child];
							ids.forEach((oldId: string) => delete entities[key][oldId]);
						}
					}
				);
			}
			/*
					   delete entities[key][id];
					   console.log('5555 state',entities)
		   
					   return {
						   result: state.result,
						   entities
					   };
					   */
		}

		case NormalizeActionTypes.REMOVE_CHILD_DATA: {
			const {
				id,
				childSchemaKey,
				parentProperty,
				parentSchemaKey,
				parentId
			} = action.payload as INormalizeRemoveChildActionPayload;
			const newEntities = { ...state.entities };
			const entity = newEntities[childSchemaKey][id];

			/* istanbul ignore if */
			if (!entity) {
				return state;
			}

			const parentRefs = getParentReferences(newEntities, action.payload);
			/* istanbul ignore else */
			if (parentRefs && parentRefs.indexOf(id) > -1) {
				newEntities[parentSchemaKey][parentId][parentProperty].splice(
					parentRefs.indexOf(id),
					1
				);
			}

			delete newEntities[childSchemaKey][id];

			return {
				...state,
				entities: newEntities
			};
		}

		default:
			return state;
	}
}

const _reducerMine = createReducer(
	initialState,
	on(setDataMine, (state, action) => {
		const { result, entities } = action;
		return {
			result,
			entities: {
				...state.entities,
				...entities
			}
		};
	}),
);

export function normalizrReducerMine(state: INormalizedEntityState = initialState, action: Action) {
	//console.log('77777777777777 reducer', action)
	return _reducerMine(state, action);
}

/**
 * Default getter for the normalized state
 * @param state any state
 */
const getNormalizedState = (state: any): INormalizedEntityState =>
	state[STATE_KEY];

/**
 * Selects all normalized entities of the state, regardless of their schema.
 * This selector should be used to enable denormalizing projector functions access
 * to all needed schema entities.
 */
export const getNormalizedEntities: MemoizedSelector<
	any,
	IEntityMap
> = createSelector(
	getNormalizedState,
	(state: INormalizedEntityState) => state.entities
);

/**
 * Select the result order of the last set operation.
 */
export const getResult: MemoizedSelector<any, string[]> = createSelector(
	getNormalizedState,
	(state: INormalizedEntityState) => state.result
);

/**
 * Generic interface for `createSchemaSelectors` return type.
 */
export interface ISchemaSelectors<T> {
	getNormalizedEntities: MemoizedSelector<any, IEntityMap>;
	getEntities: MemoizedSelector<{}, T[]>;
	entityProjector: (entities: {}, id: string) => T;
	entitiesProjector: (entities: {}) => T[];
}

/**
 * Creates an object of selectors and projector functions bound to the given schema.
 * @param schema The schema to bind the selectors and projectors to
 */
export function createSchemaSelectors<T>(
	schema: schema.Entity
): ISchemaSelectors<T> {
	return {
		/**
		 * Select all entities, regardless of their schema, exported for convenience.
		 */
		getNormalizedEntities,

		/**
		 * Select all entities and perform a denormalization based on the given schema.
		 */
		getEntities: createEntitiesSelector<T>(schema),

		/**
		 * Uses the given schema to denormalize an entity by the given id
		 */
		entityProjector: createEntityProjector<T>(schema),

		/**
		 * Uses the given schema to denormalize all given entities
		 */
		entitiesProjector: createEntitiesProjector<T>(schema)
	};
}

/**
 * Create a schema bound selector which denormalizes all entities with the given schema.
 * @param schema The schema to bind this selector to
 */
function createEntitiesSelector<T>(
	schema: schema.Entity
): MemoizedSelector<{}, T[]> {
	return createSelector(
		getNormalizedEntities,
		createEntitiesProjector<T>(schema)
	);
}

/**
 * Create a schema bound projector function to denormalize a single entity.
 * @param schema The schema to bind this selector to
 */
function createEntityProjector<T>(schema: schema.Entity) {
	return (entities: {}, id: string) =>
		createSingleDenormalizer(schema)(entities, id) as T;
}

/**
 * Create a schema bound projector function to denormalize an object of normalized entities
 * @param schema The schema to bind this selector to
 */
function createEntitiesProjector<T>(schema: schema.Entity) {
	return (entities: {}, ids?: Array<string>) =>
		createMultipleDenormalizer(schema)(entities, ids) as T[];
}

/**
 * Create a schema bound denormalizer.
 * @param schema The schema to bind this selector to
 */
function createSingleDenormalizer(schema: schema.Entity) {
	const key = schema.key;
	return (entities: { [key: string]: {} }, id: string) => {
		/* istanbul ignore if */
		if (!entities || !entities[key]) {
			return;
		}

		const denormalized = denormalize(
			{ [key]: [id] },
			{ [key]: [schema] },
			entities
		);
		return denormalized[key][0];
	};
}

/**
 * Create a schema bound denormalizer.
 * @param schema The schema to bind this selector to
 */
function createMultipleDenormalizer(schema: schema.Entity) {
	const key = schema.key;
	return (entities: { [key: string]: {} }, ids?: Array<string>) => {
		/* istanbul ignore if */
		if (!entities || !entities[key]) {
			return;
		}
		const data = ids ? { [key]: ids } : { [key]: Object.keys(entities[key]) };
		const denormalized = denormalize(data, { [key]: [schema] }, entities);
		return denormalized[key];
	};
}

/**
 * @private
 * Get the reference array from the parent entity
 * @param entities normalized entity state object
 * @param payload NormalizeChildActionPayload
 */
function getParentReferences(
	entities: any,
	payload: INormalizeChildActionPayload
): string | undefined {
	const { parentSchemaKey, parentProperty, parentId } = payload;
	if (
		entities[parentSchemaKey] &&
		entities[parentSchemaKey][parentId] &&
		entities[parentSchemaKey][parentId][parentProperty] &&
		Array.isArray(entities[parentSchemaKey][parentId][parentProperty])
	) {
		return entities[parentSchemaKey][parentId][parentProperty];
	}
}
