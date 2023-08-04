//please read readme.md in this directory
import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  DoCheck,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
  Self,
  Attribute
} from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup, NgControl, ValidationErrors } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ValidationMessageInterface, validationMessages } from '../constants/validation-messages';

@Directive({
  selector: '[formError]'
})
export class FormErrorDirective implements OnChanges, OnInit, DoCheck, OnDestroy {
  private _errorMessageElements: ValidationErrors = {};
  private _subscription: Subscription = new Subscription();
  private _formGroup: FormGroup = null;
  private _hostElement: HTMLElement = null;
  @Input('formError') private _validationMessages?: Array<ValidationMessageInterface> = null;
  @Input('formErrorAcrossField') private _acrossField: boolean = true;

  constructor(private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef,
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _controlContainer: ControlContainer,
    private _translateService: TranslateService,
    @Attribute('formControlName') private _formControlName: string,
  ) {
    this._viewContainer.createEmbeddedView(this._templateRef);
    this._hostElement = this._elementRef.nativeElement.previousElementSibling;
    console.log('----------_formControlName', _formControlName, this._elementRef, this._elementRef.nativeElement, this._hostElement)
  }

  ngOnChanges(changes: SimpleChanges) {
    let validationMessages = changes._validationMessages;
    let acrossField = changes._acrossField;
    if (validationMessages) {
      this._validationMessages = validationMessages.currentValue;
    }
    if (acrossField) {
      this._acrossField = acrossField.currentValue;
    }
  }

  ngOnInit() {
    this._formGroup = this._controlContainer.control as FormGroup;
    if (this._formGroup && this._formControlName && !this._acrossField) {
      this._subscription.add(
        this._subscription.add(this._formGroup.get(this._formControlName).valueChanges.subscribe((value) => {
          this._checkStatus();
        }))
      );
    }
  }

  max = 0;
  ngDoCheck() {
    let t1 = new Date();
    if (this._formGroup && this._formControlName && this._acrossField) {
      this._checkStatus();
      let t2 = new Date();
      let dt = t2.getTime() - t1.getTime();
      if (dt > this.max) {
        this.max = dt;
        console.log('---max', this.max)
      }
    }
  }

  private _find(stack: Array<ValidationMessageInterface | string>, errors: ValidationErrors): ValidationMessageInterface | string {
    let result: ValidationMessageInterface | string = null;
    (stack || []).forEach(item => {
      let key: string = (typeof item === 'string') ? item : Object.keys(item)[0];
      if (errors[key]) {
        result = item;
        return;
      }
    });
    return result;
  }

  private _checkStatus() {
    let formControlName = this._formControlName;
    const formControl: AbstractControl = this._formGroup.get(formControlName);
    if (formControl && formControl.errors && (formControl.touched || formControl.dirty)) {
      let keys = Object.keys(formControl.errors);
      if (keys.length > 0) {
        let message: ValidationMessageInterface | string = this._find(this._validationMessages, formControl.errors);
        if (!message) {
          message = this._find(validationMessages, formControl.errors);
        } else if (typeof message === 'string') {
          validationMessages.forEach(item => {
            if (Object.keys(item)[0] == message) {
              message = item;
              return;
            }
          })
        }
        let validatorKey: string = message && Object.keys(message)[0];
        if (validatorKey) {
          if (!this._errorMessageElements[validatorKey]) {
            //a different error happens
            if (Object.keys(this._errorMessageElements).length > 0) {
              this._removeErrorMessage();
            }
            let messageKey = message[validatorKey];
            let displayMessage: string = this._translateService.instant(messageKey);
            if (displayMessage != messageKey) {
              this._displayErrorMessage(formControl, validatorKey, displayMessage);
            } else {
              this._subscription.add(this._translateService.get(messageKey).subscribe(displayMessage => {
                this._displayErrorMessage(formControl, validatorKey, displayMessage);
              }));
            }
          }
        }
      }
    };
    if (formControl && !formControl.errors) {
      this._changeClass('remove');
      this._removeErrorMessage();
    }
  }

  private _changeClass(addOrRemove) {
    if (this._hostElement) {
      if (addOrRemove === 'add') {
        this._renderer.addClass(this._hostElement, 'ship-ui-error');
      } else {
        this._renderer.removeClass(this._hostElement, 'ship-ui-error');
      }
    }
  }

  private _insertAfter(referenceNode, newNode) {
    if (referenceNode && referenceNode.parentNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }
  }

  //changes the value, turning the control dirty,
  //blurs the form control element, setting the control to touched.
  private _displayErrorMessage(formControl: AbstractControl, validatorKey: string, displayMessage: string) {
    if ((formControl.touched || formControl.dirty) && !this._errorMessageElements[validatorKey]) {
      this._changeClass('add');
      let div: HTMLElement = document.createElement("div") as HTMLElement;
      div.classList.add('input-invalid');
      div.innerHTML = displayMessage;
      this._insertAfter(this._hostElement, div);
      this._errorMessageElements[validatorKey] = div;
    }
  }

  //remove it when a different error happens or no error happens
  private _removeErrorMessage() {
    let keys = this._errorMessageElements && Object.keys(this._errorMessageElements);
    (keys || []).forEach(key => {
      this._errorMessageElements[key].remove();
      delete this._errorMessageElements[key];
    })
  }

  ngOnDestroy() {
    this._removeErrorMessage();
    this._subscription.unsubscribe();
  }
}
