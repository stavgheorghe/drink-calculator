import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedModule } from '../shared';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './pages';
import { SessionResultItemComponent, SessionResultListComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardRoutingModule,
    SharedModule.forChild(),
  ],
  declarations: [
    DashboardPage,
    SessionResultItemComponent,
    SessionResultListComponent,
  ]
})
export class DashboardModule {}
