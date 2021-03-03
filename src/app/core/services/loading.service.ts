import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { filter, flatMap, share, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { LoadingController } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';

import { LoadingBuilder } from '../classes';


@Injectable()
export class LoadingService {

  // FIXME: infinite loading still can be reproduced if 3 or more requests are called at the same time with `blockScreen: true`.
  private showInProgress: Subject<any>;
  private readonly loading: BehaviorSubject<any>;


  constructor(private readonly loadingCtrl: LoadingController) {
    this.loading = new BehaviorSubject(undefined);
  }


  show(loadingBuilder?: LoadingBuilder): Observable<any> {
    if (this.showInProgress) {
      return this.showInProgress.pipe(
        take(1),
        flatMap(() => {
          return this.show(loadingBuilder);
        }),
      );
    }
    this.showInProgress = new Subject<any>();
    if (loadingBuilder && this.loading.getValue()) {
      const result = from(this.loading.getValue().onDidDismiss())
        .pipe(
          take(1),
          flatMap(() => {
            return this.triggerShowLoading(loadingBuilder);
          }),
          share(),
        );
        result.subscribe(() => {
          this.showInProgress.next(false);
          this.showInProgress = undefined;
        });

      return result;
    }

    if (this.loading.getValue()) {
      const overlay = this.loading.getValue();
      overlay.present();
      this.showInProgress.next(false);
      this.showInProgress = undefined;

      return of(overlay).pipe(share());
    }

    const overlayRef = this.triggerShowLoading(loadingBuilder).pipe(share());
    overlayRef.subscribe(() => {
      this.showInProgress.next(false);
      this.showInProgress = undefined;
    });

    return overlayRef;
  }


  hide(): Observable<any> {
    const hiding = this.loading
      .pipe(
        filter((value) => !!value),
        take(1),
        flatMap((value: any) => {
          if (!value) {
            return of(undefined);
          }

          const dismissing = value.dismiss();
          this.loading.next(undefined);

          return from(dismissing);
        }),
        share(),
      );

    hiding.subscribe();

    return hiding;
  }


  private triggerShowLoading(loadingBuilder?: LoadingBuilder): Observable<any> {
    const options: LoadingOptions = (loadingBuilder ? loadingBuilder.build() : undefined);
    const loading = from(this.loadingCtrl.create(options)).pipe(share());

    loading.subscribe((overlay: any) => {
      overlay.present();
      this.loading.next(overlay);
    });

    return loading;
  }

}
