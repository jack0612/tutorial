import { Directive, TemplateRef } from "@angular/core";

@Directive({ selector: "[callbackTemplate]" })
export class CallbackTemplateDirective<TImplicitContext = any> {
  constructor(public template: TemplateRef<{ $implicit: TImplicitContext }>) {}
}