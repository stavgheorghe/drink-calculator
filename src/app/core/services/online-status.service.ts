import { BehaviorSubject, merge, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Network } from '@ionic-native/network/ngx';


@Injectable()
export class OnlineStatusService {

  private readonly _onlineStatus: BehaviorSubject<boolean>;


  constructor(private readonly network: Network) {
    this._onlineStatus = new BehaviorSubject<boolean>(this.network.type !== 'none');

    merge(
      this.network.onDisconnect(),
      this.network.onConnect(),
    ).subscribe((status: boolean) => {
      this._onlineStatus.next(status);
    });
  }


  get onlineStatus(): Observable<boolean> {
    return this._onlineStatus.asObservable();
  }

}
