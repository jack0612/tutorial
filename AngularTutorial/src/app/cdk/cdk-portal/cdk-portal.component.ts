import { ComponentPortal, DomPortalHost, PortalHostDirective, TemplatePortal } from '@angular/cdk/portal';
import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
//https://medium.com/angular-in-depth/angular-cdk-portals-b02f66dd020c
/*
cdkPortalOutlet unifies the functionality of ngTemplateOutlet and ngComponentOutlet 
by allowing devs. to embed both templates and components into the view dynamically.
*/
@Component({
  selector: 'app-cdk-portal',
  templateUrl: './cdk-portal.component.html',
  styleUrls: ['./cdk-portal.component.scss']
})
export class CdkPortalComponent implements OnInit {
  @ViewChild('testTemplate', { static: true }) testTemplate: TemplateRef<any>;

  @ViewChild('testTemplate2', { static: true }) testTemplate2: TemplateRef<any>;
  private portalHost: DomPortalHost;

  @ViewChild(PortalHostDirective) _portalHost: PortalHostDirective;

  @ViewChild('content') _content: TemplatePortal<any>


  constructor(
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
  ) { }

  ngOnInit() {
    //----method 1
    // Locate an element that exists on the page
    const headerElement = document.querySelector('#pageHeader');
    // Locate the component factory for the HeaderComponent
    const embeddedView = this.viewContainerRef.createEmbeddedView(
      this.testTemplate,
      { $implicit: 'Bob' },
    );
    console.log('headerElement', headerElement)
    // Place element in correct location in DOM
    embeddedView.rootNodes.forEach(rootNode => headerElement.appendChild(rootNode));


    //method 2
    // Create a portalHost from a DOM element
    this.portalHost = new DomPortalHost(
      document.querySelector('#pageHeader'),
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    // Create a template portal
    const templatePortal = new TemplatePortal(
      this.testTemplate2,
      this.viewContainerRef,
      { $implicit: 'jack' },
    );

    // Attach portal to host
    this.portalHost.attach(templatePortal);


  }

  //method 3
  ngAfterViewChecked() {
    
  }

  ngDestroy() {
    if (this.portalHost) {
      this.portalHost.detach();
    }
  }
}

@Component({
  selector: 'my-header',
  template: `<h1>{{ title }}</h1>`
})
export class HeaderComponent {
  title = 'Hello World';

  constructor() {
    setTimeout(_ => {
      this.title = 'Updated!';
    }, 5000);
  }
}