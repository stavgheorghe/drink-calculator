import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { SessionResult } from 'app/structures';


@Injectable()
export class SessionResultsService {

  constructor(private readonly nativeStorage: NativeStorage) {
  }


  getSessionResults(): Observable<Array<SessionResult>> {
    return from(this.nativeStorage.getItem('sessionResults'))
      .pipe(
        map((value: string) => {
          const sessionResults: Array<SessionResult> = JSON.parse(value) || [];

          return sessionResults;
        })
      )
  }

}
