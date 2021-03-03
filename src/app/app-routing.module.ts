import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PlatformGuardService } from 'app/core';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'drink-session',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
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
