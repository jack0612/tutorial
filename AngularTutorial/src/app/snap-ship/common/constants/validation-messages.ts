export interface ValidationMessageInterface {
    [validatorKey: string]: string;
}

//Here validatorKey(ex:required) inside validationMessages must be the same as of the keys in control.errors object(
//    control.errors is {required:true} when  its corresponding error happens)
export const validationMessages: Array<ValidationMessageInterface> = [
    { required: 'SHIPUI.SHIPMENT.REQUIRED_NAME' },
    { email: 'SHIPUI.VALIDATION.EMAIL_ADDRESS' }
]