import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from 'app/shared';

import { DrinkSessionPage } from './pages';
import { DrinkSessionPageRoutingModule } from './drink-session-routing.module';
import { DrinkSessionService } from './services';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule.forChild(),
    DrinkSessionPageRoutingModule,
  ],
  declarations: [DrinkSessionPage],
  providers: [DrinkSessionService],
})
export class DrinkSessionModule {
}
