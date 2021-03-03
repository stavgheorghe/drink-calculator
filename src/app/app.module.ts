import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { Device } from '@ionic-native/device/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Network } from '@ionic-native/network/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from 'app/app-root';
import { AppRoutingModule } from 'app/app-routing.module';
import { CoreModule } from 'app/core';
import { SharedModule } from 'app/shared';


@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot({
      rippleEffect: false,
      mode: 'md',
      scrollAssist: true,
      scrollPadding: false,
    }),
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    Device,
    MobileAccessibility,
    SplashScreen,
    StatusBar,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    NativeStorage,
    InAppBrowser,
    Network,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
