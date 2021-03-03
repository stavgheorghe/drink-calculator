import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PlatformGuardService } from 'app/core';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
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
    loadChildren: () => import('./add-new-alcohol-type/add-new-alcohol-type.module').then(m => m.AddNewAlcoholTypePageModule),
    canLoad: [PlatformGuardService],
  },
  {
    path: 'drink-session',
    loadChildren: () => import('./drink-session/drink-session.module').then( m => m.DrinkSessionModule),
    canLoad: [PlatformGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
