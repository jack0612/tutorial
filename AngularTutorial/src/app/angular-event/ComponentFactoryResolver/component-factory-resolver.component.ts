import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MessageComponent } from './message.component';
//https://dzone.com/articles/how-to-dynamically-create-a-component-in-angular
@Component({
  selector: 'app-component-factory-resolver',
  templateUrl: './component-factory-resolver.component.html',
  styleUrls: ['./component-factory-resolver.component.scss']
})
export class ComponentFactoryResolverComponent implements OnInit {
  title = 'ComponentFactoryResolverComponent';
  componentRef: any;
  @ViewChild('messagecontainer', { read: ViewContainerRef })private  _viewContainerRef: ViewContainerRef;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
 
  }

  ngOnInit(): void {
 
  }

  createComponent(message) {
    this._viewContainerRef.clear();
    const factory = this._componentFactoryResolver.resolveComponentFactory(MessageComponent);
    this.componentRef = this._viewContainerRef.createComponent(factory);
    this.componentRef.instance.message = message;
 
  }

  destroyComponent() {
    this.componentRef.destroy();
  }

}
