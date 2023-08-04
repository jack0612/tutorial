/**
 * Exports actions and an actionCreators creator of the ngrx-normalizr package.
 */

import { Action, createAction, props } from '@ngrx/store';
import { schema, normalize } from 'normalizr';
import { IEntityMap } from '../reducer/ngrx-normalizr-mine.reducer';

/**
 * Internal action namespace
 */
const ACTION_NAMESPACE = '[@@Normalize]';

/**
 * A map of schema names to object property names.
 * Used for removing child properties of an entity.
 */
export interface ISchemaMap {
	[schemaKey: string]: string;
}

/**
 * Interface for a normalize action payload
 */
export interface INormalizeActionPayload {
	/**
	 * The normalized entities mapped to their schema keys
	 */
	entities: IEntityMap;

	/**
	 * The original sorted id's as an array
	 */
	result: string[];
}

/**
 * Interface for a remove action payload
 */
export interface INormalizeRemoveActionPayload {
	/**
	 * The id of the entity that should be removed
	 */
	id: string;

	/**
	 * The schema key of the entity that should be removed
	 */
	key: string;

	/**
	 * If maps valid schema keys to propety names,
	 * children referenced by the schema key will be removed by its id
	 */
	removeChildren: ISchemaMap | null;
}

/**
 * Base interface for `AddData`, and `RemoveData` action payload.
 */
export interface INormalizeActionSchemaConfig {
	/**
	 * Schema definition of the entity. Used for de-/ and normalizing given entities.
	 */
	schema: schema.Entity;
}

/**
 * Base interface for AddChildData` and `RemoveChildData` action payload.
 */
export interface INormalizeChildActionSchemaConfig {
	/**
	 * Schema definition of the entity. Used for de-/ and normalizing given entities.
	 */
	parentSchema: INormalizeActionSchemaConfig['schema'];
}

/**
 * Typed Interface for the config of the `AddData` and `SetData` action.
 * Holds an typed array of entities to be added to the store.
 */
export interface INormalizeActionConfig<T> extends INormalizeActionSchemaConfig {
	/**
	 * The array of entities which should be normalized and added to the store.
	 */
	data: T[];
}

/**
 * Typed Interface for the config of the `AddData` and `SetData` action.
 * Holds an typed array of entities to be added to the store.
 */
export interface INormalizeUpdateActionConfig<T>
	extends INormalizeActionSchemaConfig {
	/**
	 * The id of the entity to update
	 */
	id: INormalizeRemoveActionPayload['id'];

	/**
	 * Data to set in the entity
	 */
	changes: Partial<T>;
}

/**
 * Typed Interface for the config of the `AddChildData` action.
 * Holds an typed array of entities to be added to the store.
 */
export interface INormalizeChildActionConfigBase<T>
	extends INormalizeChildActionSchemaConfig {
	/**
	 * The array of entities which should be normalized and added to the store.
	 */
	data: T[];
}

/**
 * Interface for child data related actions
 */
export interface INormalizeChildActionPayload extends INormalizeActionPayload {
	/**
	 * The id of the parent entity
	 */
	parentId: string;

	/**
	 * Key of the parent's property which holds the child references
	 */
	parentProperty: string;

	/**
	 * Schema key of the parent's property
	 */
	parentSchemaKey: string;
}

/**
 * Interface for the payload of the `RemoveChildAction`
 */
export interface INormalizeRemoveChildActionPayload {
	/**
	 * The id of the entity that should be removed
	 */
	id: INormalizeRemoveActionPayload['id'];

	/**
	 * The key of the child schema
	 */
	childSchemaKey: string;

	/**
	 * The id of the parent entity
	 */
	parentId: INormalizeChildActionPayload['parentId'];

	/**
	 * Key of the parent's property which holds the child references
	 */
	parentProperty: INormalizeChildActionPayload['parentProperty'];

	/**
	 * Schema key of the parent's property
	 */
	parentSchemaKey: INormalizeChildActionPayload['parentSchemaKey'];
}

/**
 * Interface for the payload of the `RemoveData` action.
 * Accepts an `id` and an optional `removeChildren` property.
 */
export interface INormalizeRemoveActionConfig
	extends INormalizeActionSchemaConfig {
	/**
	 * The id of the entity that should be removed
	 */
	id: INormalizeRemoveActionPayload['id'];

	/**
	 * If maps valid schema keys to propety names,
	 * children referenced by the schema key will be removed by its id
	 */
	removeChildren?: INormalizeRemoveActionPayload['removeChildren'];
}

/**
 * Interface for the payload of the `AddChildData` action.
 */
export interface INormalizeChildActionConfig<T>
	extends INormalizeChildActionConfigBase<T> {
	/**
	 * The schema of the child data to add
	 */
	childSchema: schema.Entity;

	/**
	 * The id of the parent entity
	 */
	parentId: INormalizeChildActionPayload['parentId'];
}

/**
 * Interface for the payload of the `RemoveData` action.
 * Accepts an `id` and an optional `removeChildren` property.
 */
export interface INormalizeRemoveChildActionConfig
	extends INormalizeChildActionSchemaConfig {
	/**
	 * The id of the entity that should be removed
	 */
	id: INormalizeRemoveActionPayload['id'];

	/**
	 * The schema of the child data to add
	 */
	childSchema: schema.Entity;

	/**
	 * The id of the parent entity
	 */
	parentId: INormalizeChildActionPayload['parentId'];
}

/**
 * Payload of the `UpdateAction`
 */
export interface INormalizeUpdateActionPayload<T> {
	/**
	 * The id of the entity that should be removed
	 */
	id: INormalizeUpdateActionConfig<T>['id'];

	/**
	 * Schema key of the entity to update
	 */
	key: string;

	/**
	 * The data to set in the entity
	 */
	changes: IEntityMap;

	/**
	 * The original sorted id's as an array
	 */
	result: string[];
}

/**
 * Interface for result for the `actionCreators` function
 */
export interface INormalizeActionCreators<T> {
	/**
	 * Action creator for the `SetData` action
	 */
	setData: (data: INormalizeActionConfig<T>['data']) => SetData<T>;

	/**
	 * Action creator for the `AddData` action
	 */
	addData: (data: INormalizeActionConfig<T>['data']) => AddData<T>;

	/**
	 * Action creator for the `AddChildData` action
	 */
	addChildData: <C>(
		data: INormalizeChildActionConfig<C>['data'],
		childSchema: INormalizeChildActionConfig<C>['childSchema'],
		parentId: INormalizeChildActionConfig<C>['parentId']
	) => AddChildData<C>;

	/**
	 * Action creator for the `AddChildData` action
	 */
	updateData: (
		id: INormalizeUpdateActionConfig<T>['id'],
		changes: INormalizeUpdateActionConfig<T>['changes']
	) => UpdateData<T>;

	/**
	 * Action creator for the `removeData` action
	 */
	removeData: (
		id: INormalizeRemoveActionConfig['id'],
		removeChildren?: INormalizeRemoveActionConfig['removeChildren']
	) => RemoveData;

	/**
	 * Action creator for the `AddChildData` action
	 */
	removeChildData: (
		id: INormalizeRemoveChildActionConfig['id'],
		childSchema: INormalizeRemoveChildActionConfig['childSchema'],
		parentId: INormalizeRemoveChildActionConfig['parentId']
	) => RemoveChildData;
}

/**
 * All types of the provided actions.
 */
export class NormalizeActionTypes {
	/**
	 * Action type of the `SetData` action.
	 */
	static readonly SET_DATA = `${ACTION_NAMESPACE} Set Data`;

	/**
	 * Action type of the `AddData` action.
	 */
	static readonly ADD_DATA = `${ACTION_NAMESPACE} Add Data`;

	/**
	 * Action type of the `AddChildData` action.
	 */
	static readonly ADD_CHILD_DATA = `${ACTION_NAMESPACE} Add Child Data`;

	/**
	 * Action type of the `UpdateData` action
	 */
	static readonly UPDATE_DATA = `${ACTION_NAMESPACE} Update Data`;

	/**
	 * Action type of the `RemoveData` action.
	 */
	static readonly REMOVE_DATA = `${ACTION_NAMESPACE} Remove Data`;

	/**
	 * Action type of the `RemoveChildData` action.
	 */
	static readonly REMOVE_CHILD_DATA = `${ACTION_NAMESPACE} Remove Child Data`;
}

/**
 * Action for settings denormalized entities in the store.
 * Also see `NormalizeDataPayload`.
 */
export class SetData<T> implements Action {
	/**
	 * The action type: `NormalizeActionTypes.SET_DATA`
	 */
	readonly type = NormalizeActionTypes.SET_DATA;

	/**
	 * The payload will be an object of the normalized entity map as `entities`
	 * and the original sorted id's as an array in the `result` property.
	 */
	public payload: INormalizeActionPayload;

	/**
	 * SetData Constructor
	 * @param config The action config object
	 */
	constructor(config: INormalizeActionConfig<T>) {
		this.payload = normalize(config.data, [config.schema]);
	}
}
//https://github.com/ngrx/platform/blob/master/modules/store/src/action_creator.ts
export const setDataMine = createAction(
	NormalizeActionTypes.SET_DATA,
	(config: INormalizeActionConfig<any>)=>normalize(config.data, [config.schema])
)

/**
 * Action for adding/updating data to the store.
 * Also see `NormalizeDataPayload`.
 */
export class AddData<T> implements Action {
	/**
	 * The action type: `NormalizeActionTypes.ADD_DATA`
	 */
	readonly type = NormalizeActionTypes.ADD_DATA;

	/**
	 * The payload will be an object of the normalized entity map as `entities`
	 * and the original sorted id's as an array in the `result` property.
	 */
	public payload: INormalizeActionPayload;

	/**
	 * AddData Constructor
	 * @param config The action config object
	 */
	constructor(config: INormalizeActionConfig<T>) {
		console.log('333333333 action.config', config)
		this.payload = normalize(config.data, [config.schema]);
		console.log('333333333 this.payload', this.payload)
	}
}

/**
 * Action for adding/updating data to the store.
 * Also see `NormalizeDataPayload`.
 */
export class AddChildData<T> implements Action {
	/**
	 * The action type: `NormalizeActionTypes.ADD_CHILD_DATA`
	 */
	readonly type = NormalizeActionTypes.ADD_CHILD_DATA;

	/**
	 * The payload will be an object of the normalized entity map as `entities`
	 * and the original sorted id's as an array in the `result` property.
	 */
	public payload: INormalizeChildActionPayload;

	/**
	 * AddData Constructor
	 * @param config The action config object
	 */
	constructor(config: INormalizeChildActionConfig<T>) {
		const { data, parentSchema, parentId, childSchema } = config;
		this.payload = {
			...(normalize(data, [childSchema]) as INormalizeActionPayload),
			parentSchemaKey: parentSchema.key,
			parentProperty: getRelationProperty(parentSchema, childSchema),
			parentId
		};
	}
}

/**
 * Action for adding/updating data to the store.
 * Also see `NormalizeDataPayload`.
 */
export class UpdateData<T> implements Action {
	/**
	 * The action type: `NormalizeActionTypes.UPDATE_DATA`
	 */
	readonly type = NormalizeActionTypes.UPDATE_DATA;

	/**
	 * The payload will be an object of the normalized entity map as `entities`
	 * and the original sorted id's as an array in the `result` property.
	 */
	public payload: INormalizeUpdateActionPayload<T>;

	/**
	 * AddData Constructor
	 * @param config The action config object
	 */
	constructor(config: INormalizeUpdateActionConfig<T>) {
		const { id, schema, changes } = config;
		(changes as any)[(schema as any)._idAttribute] = id;
		const normalized = normalize([config.changes], [config.schema]);

		this.payload = {
			id,
			key: schema.key,
			changes: normalized.entities,
			result: normalized.result
		};
	}
}

/**
 * Action for removing data from the store.
 * Also see `NormalizeRemovePayload`.
 */
export class RemoveData implements Action {
	/**
	 * The action type: `NormalizeActionTypes.REMOVE_DATA`
	 */
	readonly type = NormalizeActionTypes.REMOVE_DATA;

	/**
	 * The payload will be an object of the normalized entity map as `entities`
	 * and the original sorted id's as an array in the `result` property.
	 */
	public payload: INormalizeRemoveActionPayload;

	/**
	 * RemoveData Constructor
	 * @param payload The action payload used in the reducer
	 */
	constructor(config: INormalizeRemoveActionConfig) {
		let { id, removeChildren, schema } = config;
		let removeMap: ISchemaMap = null;

		// cleanup removeChildren object by setting only existing
		// properties to removeMap
		if (removeChildren && (schema as any).schema) {
			removeMap = Object.entries(removeChildren).reduce(
				(p: any, [key, entityProperty]: [string, string]) => {
					if (entityProperty in (schema as any).schema) {
						p[key] = entityProperty;
					}
					return p;
				},
				{}
			);
		}
		
		this.payload = {
			id,
			key: schema.key,
			removeChildren:
				removeMap && Object.keys(removeMap).length ? removeMap : null
		};
		console.log('444444444 this.payload',this.payload)
	}
}

/**
 * Action for removing data from the store.
 * Also see `NormalizeRemovePayload`.
 */
export class RemoveChildData implements Action {
	/**
	 * The action type: `NormalizeActionTypes.REMOVE_CHILD_DATA`
	 */
	readonly type = NormalizeActionTypes.REMOVE_CHILD_DATA;

	/**
	 * The payload will be an object of the normalized entity map as `entities`
	 * and the original sorted id's as an array in the `result` property.
	 */
	public payload: INormalizeRemoveChildActionPayload;

	/**
	 * RemoveData Constructor
	 * @param payload The action payload used in the reducer
	 */
	constructor(config: INormalizeRemoveChildActionConfig) {
		let { id, parentSchema, childSchema, parentId } = config;
		this.payload = {
			id,
			childSchemaKey: childSchema.key,
			parentProperty: getRelationProperty(parentSchema, childSchema),
			parentSchemaKey: parentSchema.key,
			parentId
		};
	}
}

/**
 * Create a add of action creators for the `AddData` and `RemoveData` actions.
 * This is provided for convenience.
 * @param schema The schema the action creators should be bound to
 */
export function actionCreators<T>(
	schema: schema.Entity
): INormalizeActionCreators<T> {
	return {
		/**
		 * Action creator for the `SetData` action.
		 * @returns A new instance of the `SetData` action with the given schema.
		 */
		setData: (data: INormalizeActionConfig<T>['data']) =>
			new SetData<T>({ data, schema }),

		/**
		 * Action creator for the `AddData` action.
		 * @returns A new instance of the `AddData` action with the given schema.
		 */
		addData: (data: INormalizeActionConfig<T>['data']) =>
			new AddData<T>({ data, schema }),

		/**
		 * Action creator for the `AddChildData` action.
		 * @returns A new instance of the `AddChildData` action with the given schema.
		 */
		addChildData: <C>(
			data: INormalizeChildActionConfig<C>['data'],
			childSchema: INormalizeChildActionConfig<C>['childSchema'],
			parentId: INormalizeChildActionConfig<C>['parentId']
		) =>
			new AddChildData<C>({
				data,
				parentSchema: schema,
				childSchema,
				parentId
			}),

		/**
		 * Action creator for the `UpdateData` action.
		 * @returns A new instance of the `UpdateData` action with the given schema.
		 */
		updateData: (
			id: INormalizeUpdateActionConfig<T>['id'],
			changes: INormalizeUpdateActionConfig<T>['changes']
		) => new UpdateData({ id, schema, changes }),

		/**
		 * Action creator for the `RemoveData` action.
		 * @returns A new instance of the `RemoveData` action with the given schema.
		 */
		removeData: (
			id: INormalizeRemoveActionConfig['id'],
			removeChildren?: INormalizeRemoveActionConfig['removeChildren']
		) => new RemoveData({ id, schema, removeChildren }),

		/**
		 * Action creator for the `RemoveChildData` action.
		 * @returns A new instance of the `RemoveChildData` action with the given schema.
		 */
		removeChildData: (
			id: INormalizeRemoveChildActionConfig['id'],
			childSchema: INormalizeRemoveChildActionConfig['childSchema'],
			parentId: INormalizeRemoveChildActionConfig['parentId']
		) =>
			new RemoveChildData({ id, parentSchema: schema, childSchema, parentId })
	};
}

/**
 * Return the parents property name the child schema is related to
 * @param schema The parent schema
 * @param childSchema The child schema
 */
function getRelationProperty(
	schema: schema.Entity,
	childSchema: schema.Entity
): string {
	let parentProperty = null;
	const relations: {
		[key: string]: schema.Entity | [schema.Entity];
	} = (schema as any).schema;

	/* istanbul ignore else */
	if (relations) {
		Object.keys(relations).some(k => {
			let key = Array.isArray(relations[k])
				? (relations[k] as [schema.Entity])[0].key
				: (relations[k] as schema.Entity).key;

			/* istanbul ignore else */
			if (key === childSchema.key) {
				parentProperty = k;
				return true;
			}
		});
	}
	return parentProperty;
}
