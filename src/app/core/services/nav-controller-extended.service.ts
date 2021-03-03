import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { NavController } from '@ionic/angular';


@Injectable()
export class NavControllerExtendedService {

  private previousUrl: string;
  private currentUrl: string;


  constructor(
    private readonly router: Router,
    private readonly navController: NavController,
  ) {
  }


  watchForPreviousRoute() {
    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = value.url;
      }
    });
  }


  goToPreviousRoute(data?: any) {
    if (!this.previousUrl) {
      return;
    }

    this.navController.navigateBack(this.previousUrl, {state: data});
  }


  getRouteState(activatedRoute: ActivatedRoute): Observable<any> {
    const stateObservable = activatedRoute.params.pipe(
      flatMap(() => of(this.router.getCurrentNavigation()?.extras?.state)),
    );

    return stateObservable;
  }


  getPreviousUrl(): string {
    return this.previousUrl;
  }


  getCurrentUrl(): string {
    return this.currentUrl;
  }

}
