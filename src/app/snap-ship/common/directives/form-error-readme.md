# formError directive

This directive is a structural directive to change its host boder color and render  error message according to whether its host has errors after its host's input  has been  validated.

This directive has two input property, the 1st input property is mandatory to input the formGroup,
the 2nd input property is optional to input an array of {validatorKey: messageKey} or array of validatorKey or array of mixed.

Based the 2nd input property, the directive may uses global validationMessages of validation-messages.ts to get the messageKey to translate and reder the error message.

The validationMessages is an array. When mulitile errors occuse at the same time for the host element, the validatorKey at the begining of the anny has the pripority ro display.

If you find the validatorKey is not in the global validationMessages of validation-messages.ts, please add it into the end of array to gurantee that this addtion will not affect existing code and use case 1.

Use case2, case 3 case 4 only when   the validatorKey exists in global validationMessages of validation-messages.ts and 
1. the priority is different.
     for exaple, the   validationMessages is defined as 
    [{ required: 'SHIPUI.SHIPMENT.REQUIRED_NAME' },
    { email: 'SHIPUI.VALIDATION.EMAIL_ADDRESS' }],
    but for your host, the priprity would like to be email then required,
    use case 2.
2. or the validatorKey exists in global validationMessages, but its messageKey is different, use case 3.
3. or both 1 and 2, use case 4



## case 1: Example without the 2nd input property

```html
<form   [formGroup]="registerForm">
    <label>email</label>
    <input type="text"  formControlName="email1" *formError="registerForm">
</form>
```

```ts code
this.registerForm = this.fb.group({
      email1: ['', [Validators.required, Validators.email]],
    });

```

 ## case 2: Example without the 2nd input property as an array of validatorKey

 ```html
<form   [formGroup]="registerForm">
    <label>email</label>
    <input type="text"  formControlName="email2" *formError="registerForm;validationMessages:['email','required']">
</form>
```

```ts code
this.registerForm = this.fb.group({
      email2: ['', [Validators.required, Validators.email]],
    });

```
Here 'email' and 'required' inside validationMessages must be the same as of the keys in control.errors object(
    control.errors is {email:true,required:true} when its corresponding error happens
)
The directive will check whether email error exists in control.errors, if not then further check whether required error exists in control.errors, if it exists, then the directive will take the messageKey from global validationMessages in validation-messages.ts and transalte it and reder a message.

 ## case 3: Example without the 2nd input property as an array of {validatorKey: messageKey}

 ```html
<form   [formGroup]="registerForm">
    <label>email</label>
    <input type="text"  formControlName="email3" 
        *formError="registerForm;
            validationMessages:validationMessages:[{required:'SHIPUI.REQUIRED_FIELD'},{email:'SHIPUI.SHIPMENT.ADDRESS.INVALID_ADDRESS'}]">
</form>
```

```ts code
this.registerForm = this.fb.group({
      email3: ['', [Validators.required, Validators.email]],
    });
```
Here 'email' and 'required' inside validationMessages must be the same as of the keys in control.errors object(
    control.errors is {email:true,required:true} when its corresponding error happens
)
The directive will check whether email error exists in control.errors, if not then further check whether required error exists in control.errors, if it exists, then the directive will take the messageKey from  validationMessages of this input property and transalte it and reder a message.

 ## case 4: Example without the 2nd input property as an array of mixed

 ```html
<form   [formGroup]="registerForm">
    <label>email</label>
    <input type="text"  formControlName="email4" 
        *formError="registerForm;
            validationMessages:validationMessages:[{required:'SHIPUI.REQUIRED_FIELD'},'email']">
</form>
```

```ts code
this.registerForm = this.fb.group({
      email4: ['', [Validators.required, Validators.email]],
    });
```
