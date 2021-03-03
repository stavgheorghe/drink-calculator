import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrinkSessionPage } from './pages';


const routes: Routes = [
  {
    path: '',
    component: DrinkSessionPage,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinkSessionPageRoutingModule {
}
