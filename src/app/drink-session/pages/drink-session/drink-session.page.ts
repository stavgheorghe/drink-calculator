import { Component } from '@angular/core';

import { DrinkSessionItem } from 'app/structures';

import { DrinkSessionService } from '../../services';


@Component({
  selector: 'drink-session',
  templateUrl: './drink-session.page.html',
  styleUrls: ['./drink-session.page.scss'],
})
export class DrinkSessionPage {

  list: Array<DrinkSessionItem>;


  constructor(private readonly drinkSessionService: DrinkSessionService) {
    this.list = [];
    this.drinkSessionService.drinkSessionList.subscribe((list: Array<DrinkSessionItem>) => {
      this.list = list;
    });
  }

}
