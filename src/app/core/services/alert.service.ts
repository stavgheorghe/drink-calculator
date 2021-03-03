import { catchError, flatMap, take } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { AlertController } from '@ionic/angular';

import { AlertBuilder } from '../classes';


@Injectable()
export class AlertService {

  constructor(private readonly alertController: AlertController) {
  }


  show(options: AlertBuilder): Observable<any> {
    const alert = this.alertController.create(options.build());

    return from(alert).pipe(
      catchError(() => of(undefined)),
      flatMap((overlay: HTMLIonAlertElement) => from(overlay.present())),
      take(1),
    );
  }

}
