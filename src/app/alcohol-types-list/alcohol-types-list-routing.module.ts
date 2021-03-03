import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlcoholTypesListPage } from './pages';

const routes: Routes = [
  {
    path: '',
    component: AlcoholTypesListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlcoholTypesListRoutingModule {}
