import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';


import { NavController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { BaseComponent, idGenerator, NavControllerExtendedService } from 'app/core';
import { DrinkItem } from 'app/structures';
import { FORM_CONTROL_REGEX_PATTERNS } from 'app/core/types';


@Component({
  selector: 'add-new-alcohol-type',
  templateUrl: './add-new-alcohol-type.page.html',
  styleUrls: ['./add-new-alcohol-type.page.scss'],
})
export class AddNewAlcoholTypePage extends BaseComponent {

  formGroup: FormGroup;
  selectedIcon: any;
  alcoholList: Array<any>;


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly navController: NavController,
    private readonly navControllerExtendedService: NavControllerExtendedService,
    private readonly nativeStorage: NativeStorage,
    formBuilder: FormBuilder,
  ) {
    super();
    this.formGroup = formBuilder.group({
      name: [undefined, [Validators.required]],
      amount: [undefined, [Validators.required, Validators.pattern(FORM_CONTROL_REGEX_PATTERNS.numbersOnly)]],
      volumeType: [undefined, [Validators.required]],
      strength: [undefined, [Validators.required, Validators.pattern(FORM_CONTROL_REGEX_PATTERNS.numbersOnly)]],
    });
    this.alcoholList = [];
    this.detectNewIconChanges();
    from(this.nativeStorage.getItem('alcoholList'))
      .pipe(takeUntil(this.onDestroy))
      .subscribe((value) => {
        this.alcoholList = JSON.parse(value);
      });
  }

  addNewIcon() {
    this.navController.navigateForward('/alcohol-types-list');
  }

  addNewType() {
    console.log('test');
    const newTypeData = {
      id: idGenerator(),
      icon: this.selectedIcon.icon,
      name: this.formGroup.get('name')?.value,
      amount: this.formGroup.get('amount')?.value,
      volumeType: this.formGroup.get('volumeType')?.value,
      strength: this.formGroup.get('strength')?.value,
    };

    from(this.nativeStorage.getItem('drinkList'))
      .pipe(takeUntil(this.onDestroy))
      .subscribe((value: string) => {
        const list: Array<DrinkItem> = JSON.parse(value) || [];
        list.push(newTypeData);
        this.nativeStorage.setItem('drinkList' , JSON.stringify(list));
        this.navController.navigateRoot('/dashboard');
      }, () => {
        const list: Array<DrinkItem> = [newTypeData];
        this.nativeStorage.setItem('drinkList' , JSON.stringify(list));
        this.navController.navigateRoot('/dashboard');
      });
  }

  private detectNewIconChanges() {
    this.navControllerExtendedService.getRouteState(this.activatedRoute)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((state: {icon: any}) => {
        this.selectedIcon = state?.icon;
      });
  }

}
