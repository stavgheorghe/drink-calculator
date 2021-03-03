import { BehaviorSubject, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { filter } from 'rxjs/operators';
import { flatMap } from 'rxjs/internal/operators';


@Injectable()
export class UserDataService {

  private readonly userInfo: BehaviorSubject<any>;


  constructor(private readonly nativeStorage: NativeStorage) {
    this.userInfo = new BehaviorSubject(undefined);
    this.detectChangesUserData().subscribe();
  }


  get data(): Observable<any> {
    return this.userInfo.asObservable();
  }


  setSensitiveInfo(data: any) {
    this.userInfo.next(data);
  }


  private detectChangesUserData(): Observable<any> {
    return this.userInfo
      .pipe(
        filter(value => !!value),
        flatMap((value) => {
          const userData = JSON.stringify(value);
          return from(this.nativeStorage.setItem('userData' , userData))
        })
      );
  }
}
