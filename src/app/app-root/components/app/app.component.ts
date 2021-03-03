import { BehaviorSubject, Subject } from 'rxjs';
import { Component, QueryList, ViewChildren } from '@angular/core';

import { IonRouterOutlet, Platform } from '@ionic/angular';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {
  BaseComponent,
  NavControllerExtendedService,
} from 'app/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseComponent {

  @ViewChildren(IonRouterOutlet) routerOutlet: QueryList<IonRouterOutlet>;

  isUserLoggedIn: boolean;
  readonly languageInitialized: BehaviorSubject<boolean>;
  readonly languageInitializationProcessed: Subject<any>;


  constructor(
    private readonly platform: Platform,
    private readonly splashScreen: SplashScreen,
    private readonly statusBar: StatusBar,
    private readonly mobileAccessibility: MobileAccessibility,
    navControllerExtendedService: NavControllerExtendedService,
  ) {
    super();
    navControllerExtendedService.watchForPreviousRoute();
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.mobileAccessibility.usePreferredTextZoom(false);

      if (this.platform.is('ios')) {
        this.statusBar.overlaysWebView(false);
      }

      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#f5f6f8');
      this.statusBar.show();
      this.splashScreen.hide();
    });
  }

}
