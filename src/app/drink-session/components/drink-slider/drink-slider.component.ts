import { ActivatedRoute } from '@angular/router';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { IonSlides, NavController } from '@ionic/angular';

import { BaseComponent, IS_CORDOVA_DEFINED } from 'app/core';


@Component({
  selector: 'drink-slider',
  templateUrl: './drink-slider.component.html',
  styleUrls: ['./drink-slider.component.scss'],
})
export class DrinkSliderComponent extends BaseComponent implements OnInit, OnChanges {

  @ViewChild(IonSlides) slides: IonSlides;
  @Input() selectedAccount: any;
  @Input() accountsList: Array<any>;
  @Output() accountChanged: EventEmitter<any>;

  slideOpts: {initialSlide: number; speed: number};
  isCordovaDefined: boolean;
  partyType: 'CORPORATE' | 'INDIVIDUAL';


  constructor(
    private readonly navController: NavController,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    super();
    this.accountChanged = new EventEmitter();
    this.isCordovaDefined = IS_CORDOVA_DEFINED;
  }


  ngOnInit() {
    this.initSlider();
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('accountsList')) {
     if (this.slides) {
       this.slides.slideTo(this.getSelectedAccountIndex(this.accountsList, this.selectedAccount));
     }
    }
  }


  onSlideChanged() {
    this.slides.getActiveIndex().then((index: number) => {
      this.accountChanged.emit(this.accountsList[index]);
    });
  }



  goToAccountDetailsListPage(account: any) {
    this.navController.navigateForward('/accounts/details-list', {
      state: {
        accountId: account.id,
        accountType: account.acc_type,
      },
      relativeTo: this.activatedRoute,
    });
  }


  private initSlider() {
    this.slideOpts = {
      initialSlide: this.getSelectedAccountIndex(this.accountsList, this.selectedAccount),
      speed: 400,
    };
  }


  private getSelectedAccountIndex(accountsList: Array<any>, selectedAccount: any): number {
    for (let i = 0; i < accountsList.length; i++) {
      if (accountsList[i].id === selectedAccount.id) {
        return i;
      }
    }

    return 0;
  }

}
