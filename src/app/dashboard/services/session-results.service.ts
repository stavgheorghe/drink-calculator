import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Injectable()
export class SessionResultsService {

  private readonly sessionResults: BehaviorSubject<any>;


  constructor(private readonly nativeStorage: NativeStorage) {
    this.sessionResults = new BehaviorSubject(undefined);
  }


  getSessionResults() {
    this.nativeStorage.getItem('sessionResults')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }


  setSessionResults(value: any) {
    this.nativeStorage.setItem('sessionResults', value)
      .then(
        () => console.log('Stored item!'),
        error => console.error('Error storing item', error)
      );
  }





}
