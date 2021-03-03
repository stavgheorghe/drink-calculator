import { BehaviorSubject, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { DrinkSessionItem } from 'app/structures';


@Injectable()
export class DrinkSessionService {

  private list: BehaviorSubject<Array<DrinkSessionItem>>;
  private foodStatus: BehaviorSubject<string>;


  constructor(private readonly nativeStorage: NativeStorage) {
    this.list = new BehaviorSubject([]);
    this.foodStatus = new BehaviorSubject(undefined);
    this.check();
  }


  get drinkSessionList(): Observable<Array<DrinkSessionItem>> {
    return this.list.asObservable().pipe(share());
  }


  get food(): Observable<string> {
    return this.foodStatus.asObservable().pipe(share());
  }


  check() {
    from(this.nativeStorage.getItem('drinkList')).subscribe((value: string) => {
      const result: Array<DrinkSessionItem> = JSON.parse(value);
      this.list.next(result);
    }, () => {
      this.list.next([]);
    });
  }


  add(item: DrinkSessionItem) {
    const items: Array<DrinkSessionItem> = this.list.getValue();
    items.push(item);
    this.nativeStorage.setItem('drinkList', JSON.stringify(items));
    this.list.next(items);
  }


  remove(id: string) {
    const items: Array<DrinkSessionItem> = this.list.getValue();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
      }
    }
    this.nativeStorage.setItem('drinkList', JSON.stringify(items));
    this.list.next(items);
  }

  updateFood(type: string) {
    this.nativeStorage.setItem('food', type);
    this.foodStatus.next(type);
  }

}
