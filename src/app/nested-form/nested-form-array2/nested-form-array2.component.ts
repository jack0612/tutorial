import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-array2',
  templateUrl: './nested-form-array2.component.html',
  styleUrls: ['./nested-form-array2.component.scss']
})
//https://medium.com/hashtaagco/3-levels-of-nested-form-arrays-including-reactive-validations-we-decided-to-go-inception-mode-on-4fffe667fb2a
//formGroup of formArray of formGroup of formArray of formGroup of formArray of formGroup of formControl
//--form---     -----------X-----------   ----------Y----------     -----------------Z----------------
export class NestedFormArray2Component implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      'Xs': this.fb.array([
        this.initX()
      ])
    });
    this.form.valueChanges.subscribe(data => this.validateForm());
    this.validateForm();
    console.log('---this.form',this.form)
  }

  initX() {
    return this.fb.group({
      //  ---------------------forms fields on x level ------------------------
      'X': ['X', [Validators.required, Validators.pattern('[0-9]{4}')]],
      // ---------------------------------------------------------------------
      'Ys': this.fb.array([
        this.initY()
      ])
    });
  }

  initY() {
    return this.fb.group({
      //  ---------------------forms fields on y level ------------------------
      'Y1': ['Y1', [Validators.required, Validators.pattern('[0-9]{4}')]],
      'Y2': ['Y2', [Validators.required, Validators.pattern('[0-9]{4}')]],
      // ---------------------------------------------------------------------
      'Zs': this.fb.array([
        this.initZ()
      ])
    })
  }

  initZ() {
    return this.fb.group({
      //  ---------------------forms fields on z level ------------------------
      'Z': ['Z', [Validators.required, Validators.pattern('[0-9]{4}')]],
      // ---------------------------------------------------------------------
    })
  }

  addX() {
    const control :FormArray= this.form.controls['Xs'] as FormArray;
    control.push(this.initX());
  }


  addY(ix) {
    const control:FormArray = (<FormArray>this.form.controls['Xs']).at(ix).get('Ys') as FormArray ;
    control.push(this.initY());
  }
  //https://netbasal.com/angular-reactive-forms-tips-and-tricks-bb0c85400b58
  //const name = this.group.controls.name;<===>
  // const name = this.group.get('name')
  addZ(ix, iy) {
    const control:FormArray= ((<FormArray>this.form.controls['Xs']).at(ix).get('Ys') as FormArray).at(iy).get('Zs') as FormArray;
    const control2:FormArray= ((<FormArray>this.form.get('Xs')).at(ix).get('Ys') as FormArray).at(iy).get('Zs') as FormArray;
    control.push(this.initZ());
  }




  formErrors = {
    Xs: this.XsErrors()
  };


  XsErrors() {
    return [{
      //  ---------------------forms errors on x level ------------------------
      X: '',

      // ---------------------------------------------------------------------
      'Ys': this.YsErrors()

    }]

  }

  YsErrors() {
    return [{
      //  ---------------------forms errors on y level ------------------------
      Y1: '',
      Y2: '',
      // ----------------------------------------------------------------------
      Zs: this.ZsErrors()
    }]
  }

  ZsErrors() {
    return [{
      //  ---------------------forms errors on z level ------------------------
      Z: ''

      // ---------------------------------------------------------------------


    }]
  }


  validationMessages = {
    Xs: {
      X: {
        required: 'X is required.',
        pattern: 'X must be 3 characters long.'

      },
      Ys: {
        Y1: {
          required: 'Y1 is required.',
          pattern: 'Y1 must be 3 characters long.'
        },
        Y2: {
          required: 'Y2 is required.',
          pattern: 'Y2 must be 3 characters long.'
        },
        Zs: {
          Z: {
            required: 'Z is required.',
            pattern: 'Z must be 3 characters long.'
          }
        }
      }
    }
  };





  // form validation
  validateForm() {
    // console.log('validateForm');
    // for (let field in this.formErrors) {
    //   this.formErrors[field] = '';
    //   let input = this.register_readers.get(field);
    //   if (input.invalid && input.dirty) {
    //     for (let error in input.errors) {
    //       this.formErrors[field] = this.validationMessages[field][error];
    //     }
    //   }
    // }
    this.validateXs();
  }
  validateXs() {
    let XsA = <FormArray>this.form['controls'].Xs;
    console.log('validateXs');
    // console.log(XsA.value);
    this.formErrors.Xs = [];
    let x = 1;
    while (x <= XsA.length) {
      this.formErrors.Xs.push({
        X: '',
        Ys: [{
          Y1: '',
          Y2: '',
          Zs: [{
            Z: ''
          }]
        }]
      });
      let X = <FormGroup>XsA.at(x - 1);
      console.log('X--->');
      console.log(X.value);
      for (let field in X.controls) {
        let input = X.get(field);
        console.log('field--->');
        console.log(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Xs[x - 1][field] = this.validationMessages.Xs[field][error];
          }
        }
      }
      this.validateYs(x);
      x++;
    }

  }

  validateYs(x) {
    console.log('validateYs');
    let YsA = (<FormArray>this.form.controls['Xs']).at(x - 1).get('Ys') as FormArray;
    this.formErrors.Xs[x - 1].Ys = [];
    let y = 1;
    while (y <= YsA.length) {
      this.formErrors.Xs[x - 1].Ys.push({
        Y1: '',
        Y2: '',
        Zs: [{
          Z: ''
        }]
      });
      let Y = <FormGroup>YsA.at(y - 1);
      for (let field in Y.controls) {
        let input = Y.get(field);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Xs[x - 1].Ys[y - 1][field] = this.validationMessages.Xs.Ys[field][error];

          }

        }
      }

      this.validateZs(x, y);
      y++;
    }
  }

  validateZs(x, y) {
    console.log('validateZs--');
    let ZsA = ((<FormArray>this.form.controls['Xs']).at(x - 1).get('Ys') as FormArray).at(y - 1).get('Zs') as FormArray;
    this.formErrors.Xs[x - 1].Ys[y - 1].Zs = [];
    let z = 1;
    while (z <= ZsA.length) {
      this.formErrors.Xs[x - 1].Ys[y - 1].Zs.push({
        Z: ''
      });
      let Z = <FormGroup>ZsA.at(z - 1);
      for (let field in Z.controls) {
        let input = Z.get(field);
        console.log('input--->');
        console.log(input);
        if (input.invalid && input.dirty) {
          for (let error in input.errors) {
            this.formErrors.Xs[x - 1].Ys[y - 1].Zs[z - 1][field] = this.validationMessages.Xs.Ys.Zs[field][error];

          }

        }
      }

      // this.validateSamnumbers(x, y);
      z++;
    }
  }



  constructor(private fb: FormBuilder) {
  }

}
