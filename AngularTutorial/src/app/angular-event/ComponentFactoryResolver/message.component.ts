import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
@Component({
    selector: 'app-message',
    template: '<h2>{{message}}</h2>'
})
export class MessageComponent {
    @Input() message: string = null;
}