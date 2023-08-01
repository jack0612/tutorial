import { environment } from "../../../../../environments/environment";
//https://netbasal.com/inspiration-for-custom-decorators-in-angular-95aeb87f072c

/*
class: declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
property: declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
method: declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
parameter: declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;
*/

export function NgLog(): ClassDecorator {
    return function (constructor: any) {
        if (!environment.production) {
            // You can add/remove events for your needs
            const LIFECYCLE_HOOKS = [
                
                'ngOnInit',
               
                'ngOnDestroy'
            ];
            const component = constructor.name;

            LIFECYCLE_HOOKS.forEach(hook => {
                const original = constructor.prototype[hook];
                constructor.prototype[hook] = function (...args) {
                    //console.log(`%c ${component} - ${hook}`, `color: #4CAF50; font-weight: bold`, ...args);
                    original && original.apply(this, args);
                }
            });
        }
    }
}
