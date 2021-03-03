import { CanLoad, Route, UrlSegment } from '@angular/router';
import { from, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { Platform } from '@ionic/angular';


@Injectable()
export class PlatformGuardService implements CanLoad {

  constructor(private readonly platform: Platform) {
  }


  canLoad(route: Route, state: Array<UrlSegment>): Observable<boolean> {
    const platformSubject: Subject<boolean> = new Subject();

    from(this.platform.ready()).subscribe(() => {
      platformSubject.next(true);
    });

    return platformSubject.asObservable().pipe(take(1));
  }

}
