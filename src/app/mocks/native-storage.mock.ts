import { CookieService } from 'ng2-cookies';
import { Injectable } from '@angular/core';


@Injectable()
export class NativeStorageMock {

  constructor(private readonly cookieService: CookieService) {
  }


  setItem(reference: string, value: any) {
    const tenYears = 365 * 10;
    this.cookieService.set(reference, value, tenYears);

    return Promise.resolve(value);
  }


  getItem(reference: string) {
    const value = this.cookieService.get(reference);

    return value
      ? Promise.resolve(value)
      : Promise.reject({
        code: 2, // ITEM_NOT_FOUND
        exception: undefined,
        source: 'mock',
      });
  }

}
