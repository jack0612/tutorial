import { Component } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
    selector: 'app-harness',
    template: `
        <button mat-stroked-button (click)="openSnackBar()" aria-label="Show an example snack-bar">
            Pizza party
        </button>
    `,
})
export class SnackBarComponent {
    constructor(private snackBar: MatSnackBar) { }

    openSnackBar() {
        console.log('-----------openSnackBar')
        return this.snackBar.open('Pizza Party!!!');
    }
}