import { FormControl, FormGroup } from "@angular/forms";
import { GlobalConstants } from "../constants/global-constants";
import { TranslateService } from "@ngx-translate/core";


export class AppUtil {
  static staticVal = 1;
  private instanceVal = 2;
  static convertMetricToImperial(metricVal: number) {
    let val = Number(parseFloat((metricVal / GlobalConstants.LB_TO_KG).toString())
      .toPrecision(GlobalConstants.THREE_DECIMAL_VALUE));
    val = Number(val.toFixed(GlobalConstants.THREE_DECIMAL_VALUE));
    if (val <= 0.001) {
      return 0.002; // miniumum package weight
    }
    return val;
  }

  static convertImperialToMetric(imperialVal: number) {
    let val = Number(parseFloat((imperialVal * GlobalConstants.LB_TO_KG).toString())
      .toPrecision(GlobalConstants.THREE_DECIMAL_VALUE));
    val = Number(val.toFixed(GlobalConstants.THREE_DECIMAL_VALUE));
    if (val < 0.001) {
      return 0.001; // miniumum package weight
    }
    return val;
  }

  //null: no decimal
  //'.': english
  //',': french
  static isInvalidNumber(value: string | number, decimalSeparator: string): boolean {
    let result = false;
    if (value != null) {
      let strvalue: String = value.toString();
      let chars = strvalue.split('');
      for (let c of chars) {
        if ((decimalSeparator != null && c != decimalSeparator || decimalSeparator == null) && !(c <= '9' && c >= '0')) {
          result = true;
          break;
        }
      }
    } else {
      result = true;
    }
    return result;
  }

  static sumNumberOfErrors(formGroup: FormGroup) {
    let numberOfErrors = 0;
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
        if (control.errors) {
          numberOfErrors++;
        }
      } else if (control instanceof FormGroup) {
        this.sumNumberOfErrors(control);
      }
    });
    return numberOfErrors;
  }


  static getErrorMessage(numberOfErrors:number, notificationEnum:any, translate:TranslateService) {
    if (numberOfErrors > 0) {
      return {
        msgType: notificationEnum['errorMsg'],
        msgContent: translate.instant('SHIPUI.CUSTOMSITEM.ERROR_NOTIFICATION', { numOfErrors: numberOfErrors }),
        displayErrorNotification: true
      }
    }
    return null;
  }

  static isObject = (obj: unknown) =>
    (typeof obj === "function" || (typeof obj === "object" && !!obj)) &&
    Array.isArray(obj) === false &&
    !(obj instanceof Date);

}