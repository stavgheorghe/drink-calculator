import { Component } from '@angular/core';

import { DrinkItem, DrinkSessionItem } from 'app/structures';
import { idGenerator } from 'app/core';

import { DrinkSessionService } from '../../services';


@Component({
  selector: 'drink-session',
  templateUrl: './drink-session.page.html',
  styleUrls: ['./drink-session.page.scss'],
})
export class DrinkSessionPage {

  list: Array<DrinkSessionItem>;
  food: string;


  constructor(private readonly drinkSessionService: DrinkSessionService) {
    this.list = [];
    this.drinkSessionService.drinkSessionList.subscribe((list: Array<DrinkSessionItem>) => {
      this.list = list;
    });

    this.drinkSessionService.food.subscribe((food: string) => {
      this.food = food;
    });
  }


  addDrinkToSession(drink: DrinkItem) {
    const date: Date = new Date();
    const result: DrinkSessionItem = {
      id: idGenerator(),
      date: this.takeDate(date),
      time: this.takeTime(date),
      drink: drink,
    };

    this.drinkSessionService.add(result);
  }


  removeDrinkFromSession(id?: string) {
    this.drinkSessionService.remove(id);
  }

  changeFood() {
    this.drinkSessionService.updateFood(this.food);
  }


  private takeDate(date: Date): string {
    const day: string = this.addZeroToDate(date.getDate());
    const month: string = this.addZeroToDate((date.getMonth() + 1));
    const year: number = date.getFullYear();
    const result: string = day + '.' + month + '.' + year;

    return result;
  }


  private takeTime(date: Date): string {
    return date.getHours() + ':' + date.getMinutes();
  }


  private addZeroToDate(value: number): string {
    return (value <= 9) ? ('0' + value) : value.toString();
  }

}
