import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AlcoholTypesListPage } from './pages';
import { AlcoholTypesListRoutingModule } from './alcohol-types-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AlcoholTypesListRoutingModule,
  ],
  declarations: [AlcoholTypesListPage]
})
export class AlcoholTypesListModule {}
