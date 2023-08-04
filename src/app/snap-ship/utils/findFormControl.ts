import { AbstractControl, ControlContainer } from '@angular/forms';

/**
 * Finds a form control explicitly or by name from the ControlContainer.
 *
 * @param control An existing form control, as passed with the formControl directive
 * @param formControlName An form control name, as passed with the formControlName directive
 * @param controlContainer The Directive’s ControlContainer
 */
export const findFormControl = (
  control?: AbstractControl,
  formControlName?: string,
  controlContainer?: ControlContainer,
): AbstractControl => {
  if (control) {
    return control;
  }
  if (!formControlName) {
    throw new Error('getFormControl: control or control name must be given');
  }
  if (!(controlContainer && controlContainer.control)) {
    throw new Error(
      'getFormControl: control name was given but parent control not found',
    );
  }
  const controlFromName = controlContainer.control.get(formControlName);
  if (!controlFromName) {
    throw new Error(`getFormControl: control '${formControlName}' not found`);
  }
  return controlFromName;
};
