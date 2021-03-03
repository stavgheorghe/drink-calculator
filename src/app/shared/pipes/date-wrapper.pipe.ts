import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'dateWrapper',
})
export class DateWrapperPipe implements PipeTransform {

  static readonly format = 'dd MMM yyyy';


  constructor() {
  }


  transform(value: any, params?: string): string {
    let result;
    const dateFormat = (params || DateWrapperPipe.format);
    const datePipe = new DatePipe('en-EN');

    try {
      result = datePipe.transform(value, dateFormat);
    } catch (err) {
      result = value;
    }

    return result;
  }

}
