import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PlatformGuardService } from 'app/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canLoad: [PlatformGuardService],
  }, {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canLoad: [PlatformGuardService],
  }, {
    path: 'alcohol-types-list',
    loadChildren: () => import('./alcohol-types-list/alcohol-types-list.module').then(m => m.AlcoholTypesListModule),
    canLoad: [PlatformGuardService],
  },
  {
    path: 'add-new-alcohol-type',
    loadChildren: () => import('./add-new-alcohol-type/add-new-alcohol-type.module').then(m => m.AddNewAlcoholTypePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
