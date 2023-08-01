
//https://github.com/NetanelBasal/ngx-auto-unsubscribe
//https://netbasal.com/automagically-unsubscribe-in-angular-4487e9853a88
const isFunction = fn => typeof fn === "function";

const doUnsubscribe = subscription => {
    subscription &&
        isFunction(subscription.unsubscribe) &&
        subscription.unsubscribe();
};

const doUnsubscribeIfArray = subscriptionsArray => {
    Array.isArray(subscriptionsArray) &&
        subscriptionsArray.forEach(doUnsubscribe);
};

export function AutoUnsubscribe({
    blackList = [],
    arrayName = "",
    event = "ngOnDestroy"
} = {}): ClassDecorator {
    return function (constructor: Function) {
        const original = constructor.prototype[event];

        if (!isFunction(original)) {
            throw new Error(
                `${constructor.name
                } is using @AutoUnsubscribe but does not implement ${event}`
            );
        }

        constructor.prototype[event] = function () {
            isFunction(original) && original.apply(this, arguments);

            if (arrayName) {
                doUnsubscribeIfArray(this[arrayName]);
                return;
            }

            for (let propName in this) {
                if (blackList.includes(propName)) continue;

                const property = this[propName];
                doUnsubscribe(property);
            }
        };
    };
}