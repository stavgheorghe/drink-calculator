import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { IonSlides, NavController } from '@ionic/angular';

import { BaseComponent } from 'app/core';
import { DrinkItem } from 'app/structures';


@Component({
  selector: 'drink-slider',
  templateUrl: './drink-slider.component.html',
  styleUrls: ['./drink-slider.component.scss'],
})
export class DrinkSliderComponent extends BaseComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  @Input() list: Array<DrinkItem>;
  @Output() drinkAdded: EventEmitter<DrinkItem>;

  slideOpts: any;
  selectedItem: DrinkItem;


  constructor(private readonly navController: NavController) {
    super();
    this.drinkAdded = new EventEmitter();
  }


  ngOnInit() {
    this.initSlider();
  }


  onSlideChanged() {
  }


  addDrink() {
    this.navController.navigateRoot('/add-new-alcohol-type');
  }


  addDrinkToSession(item: DrinkItem) {
    this.drinkAdded.emit(item);
  }


  private initSlider() {
    this.slideOpts = {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 10,
      speed: 400
    };
  }

}
