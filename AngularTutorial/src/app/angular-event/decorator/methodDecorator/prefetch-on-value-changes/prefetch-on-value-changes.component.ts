import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, NgModelGroup } from '@angular/forms';
import { PrefetchOnValueChanges } from './prefetch-on-value-changes.decorator';
 
 
@Component({
    selector: 'prefetch-on-value-changes',
    template: `
    <form [formGroup]="form">
    <h1>prefetch-on-value-changes</h1>
    <h2>Hello {{name}}!!!</h2>
    <div>Greetings: {{greetings}}</div>
    <input type='text' formControlName="firstName">
    `,
    styles: [`h1 { font-family: Lato; border-top: 1px solid #CCCCCC;}`]
})
export class PrefetchOnValueChangesComponent {
    name = 'jack'
    public greetings: string = '';

    form: FormGroup;
    formControlName = "firstName"

    constructor(private fb: FormBuilder) {
        //console.log('-------------PrefetchOnValueChangesComponent.constructor')
        this.form = fb.group({
            [this.formControlName]: ['']
        })

    }

    ngOnInit(){
        
    }

    @PrefetchOnValueChanges('form', "firstName")    //method decorator
    onNameChange( ) {
      
        this.greetings = this.name + '!!!!!';
        //console.log('===========greeting',this.greetings)
    }

   
}
