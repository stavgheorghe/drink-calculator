import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { UserDataService } from '../../../core';


@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  userName: string;
  areSettingsShown: boolean;
  settings: Array<{label: string; path: string}>


  constructor(
    private readonly userDataService: UserDataService,
    private readonly navController: NavController
  ) {
    this.settings = [
      {
        label: 'User Profile',
        path: 'user',
      }, {
        label: 'Drink List',
        path: 'drink-list',
      },
    ];
  }


  ngOnInit() {
    this.userDataService.data.subscribe((value: any) => {
      value = {name: 'Valera Alkash'};
      if (!value) {
        this.navController.navigateRoot('/user');
      } else {
        this.userName = value.name;
      }
    })
  }


  moveToNewSessionPage() {
    this.navController.navigateForward('/drink-session');
  }


  redirectToPage(path: string) {
    this.navController.navigateForward(path);
    this.hideSettings();
  }


  showSettings() {
    this.areSettingsShown = true;
  }


  hideSettings() {
    this.areSettingsShown = false;
  }

}
