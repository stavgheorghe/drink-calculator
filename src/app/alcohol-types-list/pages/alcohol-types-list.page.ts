import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'alcohol-types-list',
  templateUrl: './alcohol-types-list.page.html',
  styleUrls: ['./alcohol-types-list.page.scss'],
})
export class AlcoholTypesListPage {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly navController: NavController,
  ) {}


  selectIcon() {
    this.navController.navigateForward('/add-new-alcohol-type', {
      state: {
        icon: {
          id: 'string',
          icon: 'wine',
          name: 'wine',
          amount: 1,
          volumeType: 'L',
          strength: 12,
        }
      },
      relativeTo: this.activatedRoute,
    });
  }
}
