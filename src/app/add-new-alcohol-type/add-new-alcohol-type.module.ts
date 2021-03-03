import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { AddNewAlcoholTypePageRoutingModule } from './add-new-alcohol-type-routing.module';
import { AddNewAlcoholTypePage } from './pages';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddNewAlcoholTypePageRoutingModule,
  ],
  declarations: [AddNewAlcoholTypePage]
})
export class AddNewAlcoholTypePageModule {}
