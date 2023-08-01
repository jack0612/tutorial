//key is name, not onNamgeChange
export function OnPropertyChange<T = any>(methodName: string, scope?: any) {
    return (target: T, key: keyof T): void => {
        //console.log('----------target',target, key);
        const originalDescriptor = Object.getOwnPropertyDescriptor(target, key);
        //console.log('----------originalDescriptor',originalDescriptor)
        /*
        ----------target {constructor: ƒ, onNameChange: ƒ} name
        ----------originalDescriptor undefined
        */
        let val;

        // Wrap hook methods
        Object.defineProperty(target, key, {
            set(value) {
                const instance = this;
                const previousValue = val;

                if (previousValue === value) {
                    return;
                }

                val = value;
                if (originalDescriptor) {
                    originalDescriptor.set.call(instance, value);
                }

                if (methodName && val !== previousValue) {
                    instance[methodName].call(scope || instance, value, previousValue);
                }
            },
            get() {
                const instance = this;
     
                if (originalDescriptor) {
                    return originalDescriptor.get.call(instance);
                }
                return val;
            }
        });
    };
}