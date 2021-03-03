import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { environment } from 'environments/environment';

import {
  AlertService,
  LoadingService,
  NavControllerExtendedService,
  OnlineStatusService,
  OpenExternalUrlService,
  PlatformGuardService,
  UserDataService,
} from './services';
import { Environment } from './classes';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AlertService,
        LoadingService,
        NavControllerExtendedService,
        OpenExternalUrlService,
        PlatformGuardService,
        UserDataService,
        OnlineStatusService,
        {
          provide: Environment,
          useFactory: () => new Environment(environment),
        },
      ],
    };
  }


  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }

}
