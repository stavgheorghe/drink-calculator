import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

import { MenuController, PopoverController } from '@ionic/angular';

import { BaseComponent, UserDataService } from 'app/core';


@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent extends BaseComponent implements OnDestroy {

  @Input() backButtonHref: string;
  @Input() pageTitle: string;
  @Input() blockScreen: boolean;
  @Input() showLanguageSelector?: boolean;
  @Output() navigateBack: EventEmitter<boolean>;

  isLangOpened: boolean;
  partyName: string;


  constructor() {
    super();
    this.navigateBack = new EventEmitter();
  }


  goToPreviousPage() {
    this.navigateBack.emit();
  }


  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
