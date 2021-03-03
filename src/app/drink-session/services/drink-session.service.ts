import { BehaviorSubject, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { DrinkSessionItem } from 'app/structures';


@Injectable()
export class DrinkSessionService {

  private list: BehaviorSubject<Array<DrinkSessionItem>>;


  constructor(private readonly nativeStorage: NativeStorage) {
    this.list = new BehaviorSubject([]);
  }


  get drinkSessionList(): Observable<Array<DrinkSessionItem>> {
    return this.list.asObservable().pipe(share());
  }


  check() {
    from(this.nativeStorage.getItem('drinkList')).subscribe((value: string) => {
      const result: Array<DrinkSessionItem> = JSON.parse(value);
      this.list.next(result);
    }, () => {
      this.list.next([]);
    });
  }


  add() {
  }


  remove() {
  }

}
