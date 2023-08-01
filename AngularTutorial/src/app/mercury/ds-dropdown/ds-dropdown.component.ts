import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Event } from '@angular/router';
interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'ds-dropdown',
  templateUrl: './ds-dropdown.component.html',
  styleUrls: ['./ds-dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DsDropdownComponent implements OnInit {
  animalControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];
  @ViewChild('mySelect') mySelect: any;
  @ViewChild('mySelect2') mySelect2: ElementRef;

  selected = 'Dog';//this.animals[0].name;
  selected2 = 'Dog';
  constructor(private el: ElementRef, private render: Renderer2, @Inject(DOCUMENT) private _document: HTMLDocument) {}

  ngOnInit(): void {
    this.animalControl.setValue('Dog');
    this.animalControl.valueChanges.subscribe(value=>{
      console.log('selected value',value)
    })
  }
  forcePosition(event) {
    setTimeout(() => {
      let openBelow;
      let elements = this._document.querySelectorAll('.mat-select-panel');
      elements.forEach((element) => {
        const spaceBelow = window.innerHeight - event.clientY;
        openBelow = spaceBelow > element.clientHeight + 25;
        const clientHeight = element.clientHeight + 11;
        element.classList.remove('openUp');
        element.classList.remove('openBelow');
        if (openBelow) {
          element.classList.add('openBelow');
        } else {
          element.classList.add('openUp');
          element.setAttribute('style', 'top:-' + clientHeight + 'px;');
        }
      });

      let elementsMain = this._document.querySelectorAll('.mat-select');
      elementsMain.forEach((element) => {
        element.classList.remove('openUp');
        element.classList.remove('openBelow');
        if (openBelow) {
          element.classList.add('openBelow');
        } else {
          element.classList.add('openUp');
        }
      });
    }, 300);
  }
}
