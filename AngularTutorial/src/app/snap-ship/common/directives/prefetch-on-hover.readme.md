# prefetchOnHover directive

This directive is   to preftech API Dto to store when user input on page(usually this time the page is free).

This directive has one input property, it is the prefetch function. When the user enter first character the prefetch function runs.
 


## use case  

```html
<form   [formGroup]="registerForm">
    <label>email</label>
    <input type="text"  [prefetchOnHover]="prefetchDate">
</form>

```ts 

export class TestComponent implements OnInit {
  prefetchData(){
    console.log('prefetch Data')
  }

}
```

