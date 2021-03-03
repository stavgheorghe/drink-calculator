import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BaseComponent, UserDataService } from 'app/core';
import { FORM_CONTROL_REGEX_PATTERNS } from 'app/core/types';
import {NavController} from "@ionic/angular";


@Component({
  selector: 'user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage extends BaseComponent {

  formGroup: FormGroup;

  constructor(
    private readonly userDataService: UserDataService,
    private readonly navController: NavController,
    formBuilder: FormBuilder,
  ) {
    super();
    this.formGroup = formBuilder.group({
      weight: [undefined, [Validators.required, Validators.pattern(FORM_CONTROL_REGEX_PATTERNS.numbersOnly)]],
      height: [undefined, [Validators.required, Validators.pattern(FORM_CONTROL_REGEX_PATTERNS.numbersOnly)]],
      gender: [undefined, [Validators.required]],
      year: [undefined, [Validators.required]],
    });
  }


  saveUserData() {
    const data = this.formGroup.getRawValue();
    const age = new Date().getFullYear() -  data.year;
    const userData: any = {
      weight: data?.weight,
      height: data?.height,
      gender: data?.gender,
      age: age,
    };

    this.userDataService.setSensitiveInfo(userData);
    this.navController.navigateRoot('/dashboard');
  }

  getYearsArray() {
    const years = [];
    const minYear = 1900;
    const allowAgeToDrink = 18;
    let currentYear = new Date().getFullYear() - allowAgeToDrink;

    for (let i = 0; i < currentYear; i++) {
      if (minYear === currentYear) {
        break;
      }
      years.push(--currentYear)
    }

    return years;
  }

}
