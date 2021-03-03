import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'app/core';
import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'alcohol-types-list',
  templateUrl: './alcohol-types-list.page.html',
  styleUrls: ['./alcohol-types-list.page.scss'],
})
export class AlcoholTypesListPage extends BaseComponent {

  alcoholList: Array<any>;
  defaultAlcoholTypes: Array<any>;


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly navController: NavController,
    private readonly nativeStorage: NativeStorage,
  ) {
    super();
    this.alcoholList = [];
    from(this.nativeStorage.getItem('alcoholList'))
      .pipe(takeUntil(this.onDestroy))
      .subscribe((value) => {
        this.alcoholList = JSON.parse(value);
      });
    this.defaultAlcoholTypes = [{
      id: '323v4',
      icon: 'wine',
      name: 'wine',
      amount: 1,
      volumeType: 'L',
      strength: 12,
    }, {
      id: '323v4',
      icon: 'beer',
      name: 'beer',
      amount: 0.5,
      volumeType: 'L',
      strength: 1,
    },
  ];
    this.alcoholList.concat(this.defaultAlcoholTypes);
  }


  selectIcon(item) {
    this.navController.navigateForward('/add-new-alcohol-type', {
      state: {
        icon: item,
      },
      relativeTo: this.activatedRoute,
    });
  }
}
