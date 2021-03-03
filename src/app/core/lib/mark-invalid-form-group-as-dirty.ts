import { FormGroup } from '@angular/forms';


export function markInvalidFormGroupAsDirty(formGroup: FormGroup) {
  if (formGroup.controls) {
    for (const key of Object.keys(formGroup.controls)) {
      const control = formGroup.get(key);
      if (control.invalid) {
        control.markAsDirty();
        control.markAllAsTouched();
        control.updateValueAndValidity({emitEvent: false});
      }
    }
  }
}
