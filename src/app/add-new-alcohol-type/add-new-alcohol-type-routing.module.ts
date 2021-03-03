import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewAlcoholTypePage } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AddNewAlcoholTypePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewAlcoholTypePageRoutingModule {}
