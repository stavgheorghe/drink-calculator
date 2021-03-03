import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class UserDataService {

  private readonly userInfo: BehaviorSubject<any>;


  constructor() {
    this.userInfo = new BehaviorSubject(undefined);
  }


  get data(): Observable<any> {
    return this.userInfo.asObservable();
  }


  setSensitiveInfo(data: any) {
    this.userInfo.next(data);
  }

}
