import { BehaviorSubject, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';

import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { DrinkItem, DrinkSessionItem } from 'app/structures';


@Injectable()
export class DrinkSessionService {

  private list: BehaviorSubject<Array<DrinkSessionItem>>;
  private foodStatus: BehaviorSubject<string>;
  private drinks: BehaviorSubject<Array<DrinkItem>>;


  constructor(private readonly nativeStorage: NativeStorage) {
    this.list = new BehaviorSubject([]);
    this.foodStatus = new BehaviorSubject(undefined);
    this.drinks = new BehaviorSubject([]);
    this.checkDrinkSessionList();
    this.checkDrinkList();
    this.checkFood();
  }


  get drinkSessionList(): Observable<Array<DrinkSessionItem>> {
    return this.list.asObservable().pipe(share());
  }


  get food(): Observable<string> {
    return this.foodStatus.asObservable().pipe(share());
  }


  get drinkList(): Observable<Array<DrinkItem>> {
    return this.drinks.asObservable();
  }


  checkDrinkSessionList() {
    from(this.nativeStorage.getItem('drinkSessionList')).subscribe((value: string) => {
      const result: Array<DrinkSessionItem> = JSON.parse(value);
      this.list.next(result);
    }, () => {
      this.list.next([]);
    });
  }


  checkDrinkList() {
    from(this.nativeStorage.getItem('drinkList')).subscribe((value: string) => {
      const result: Array<DrinkItem> = JSON.parse(value);
      this.drinks.next(result);
    }, () => {
      this.drinks.next([]);
    });
  }


  checkFood() {
    from(this.nativeStorage.getItem('food')).subscribe((value: string) => {
      this.foodStatus.next(value);
    }, () => {
      this.foodStatus.next(undefined);
    });
  }


  add(item: DrinkSessionItem) {
    const items: Array<DrinkSessionItem> = this.list.getValue();
    items.push(item);
    this.nativeStorage.setItem('drinkSessionList', JSON.stringify(items));
    this.list.next(items);
  }


  remove(id: string) {
    const items: Array<DrinkSessionItem> = this.list.getValue();
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
      }
    }
    this.nativeStorage.setItem('drinkSessionList', JSON.stringify(items));
    this.list.next(items);
  }


  updateFood(type: string) {
    this.nativeStorage.setItem('food', type);
    this.foodStatus.next(type);
  }


  removeFood() {
    this.nativeStorage.setItem('food', undefined);
    this.foodStatus.next(undefined);
  }


  addDrink(drink: DrinkItem) {
    const items: Array<DrinkItem> = this.drinks.getValue();
    items.push(drink);
    this.nativeStorage.setItem('drinkList', JSON.stringify(items));
    this.drinks.next(items);
  }


  updateDrink(drink: DrinkItem) {
    const items: Array<DrinkItem> = this.drinks.getValue();
    for (let i = 0; i < items.length; i++) {
      if (items[0].id === drink.id) {
        items[i] = drink;
      }
    }

    this.nativeStorage.setItem('drinkList', JSON.stringify(items));
    this.drinks.next(items);
  }


  calculate(): number {
    return 0;
  }

}
