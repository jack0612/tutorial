import { ErrorHandler, Injectable, Inject, forwardRef, NgZone } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';

//if error is caught by effects,
//it will not be caught by ErrorHandler

@Injectable()
export class CustomErrorHandler implements ErrorHandler {


    handleError(error: Error | HttpErrorResponse) {
        if (error instanceof Error) {
            console.log('CustomErrorHandler Error', error)
        } else if (error instanceof HttpErrorResponse) {
            console.log('CustomErrorHandler HttpErrorResponse', error)
        } else {
            console.log('CustomErrorHandler Other', error, typeof error)
        }



    }
}
