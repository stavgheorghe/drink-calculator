import { DrinkItem } from './drink-item.interface';


export interface DrinkSessionItem {

  id: string;
  date: string;
  time: string;
  drink: DrinkItem;

}
