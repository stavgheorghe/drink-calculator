import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class SessionResultsService {

  private readonly sessionResults: BehaviorSubject<any>;


  constructor() {
    this.sessionResults = new BehaviorSubject(undefined);
  }


  get data(): Observable<any> {
    return this.sessionResults.asObservable();
  }


  setSensitiveInfo(data: any) {
    this.sessionResults.next(data);
  }

}
