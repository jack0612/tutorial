# prefetchOnValueChanges directive

This directive is   to preftech API Dto to store when user input on page(usually this time the page is free).

This directive has one input property, it is the prefetch function. When the user enter first character the prefetch function runs.
 
For  the usage, the formControlName attribute must exist in the input element.  this diretive can not be  together with [formControlName].

If your form is bult with {updateOn: 'blur'}, the error message and status will be updated after the input box is blured,
otherwise it will be updated when you input.
  this.fb.group({
       ...
    }, {
      updateOn: 'blur' 
    });


## use case  

```html
<form   [formGroup]="registerForm">
    <label>email</label>
    <input type="text"  formControlName="email1" *formError="registerForm" [prefetchOnValueChanges]="prefetchDate">
</form>

```ts 

export class TestComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.registerForm = this.fb.group({
      email1: ['', [Validators.required, Validators.email]],
    });
  }

  prefetchData(){
    console.log('prefetch Data')
  }

}
```

