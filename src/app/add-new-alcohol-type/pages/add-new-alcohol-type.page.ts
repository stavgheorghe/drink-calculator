import { ActivatedRoute } from '@angular/router';
import { BaseComponent, idGenerator, NavControllerExtendedService } from 'app/core';
import { Component } from '@angular/core';
import { FORM_CONTROL_REGEX_PATTERNS } from 'app/core/types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { takeUntil } from 'rxjs/operators';
import {from} from "rxjs";
import {NativeStorage} from "@ionic-native/native-storage/ngx";


@Component({
  selector: 'add-new-alcohol-type',
  templateUrl: './add-new-alcohol-type.page.html',
  styleUrls: ['./add-new-alcohol-type.page.scss'],
})
export class AddNewAlcoholTypePage extends BaseComponent {

  formGroup: FormGroup;
  selectedIcon: any;

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
    this.detectNewIconChanges();
  }

  addNewIcon() {
    this.navController.navigateForward('/alcohol-types-list');
  }

  addNewType() {
    const newTypeData = {
      id: idGenerator(),
      icon: this.selectedIcon.icon,
      name: this.formGroup.get('name')?.value,
      amount: this.formGroup.get('amount')?.value,
      volumeType: this.formGroup.get('volumeType')?.value,
      strength: this.formGroup.get('strength')?.value,
    };

    // from(this.nativeStorage.setItem('userData' , userData))
  }

  private detectNewIconChanges() {
    this.navControllerExtendedService.getRouteState(this.activatedRoute)
      .pipe(takeUntil(this.onDestroy))
      .subscribe((state: {icon: any}) => {
        this.selectedIcon = state?.icon;
      });
  }

}
