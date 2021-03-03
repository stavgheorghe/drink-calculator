import { Pipe, PipeTransform } from '@angular/core';

import { DateWrapperPipe } from './date-wrapper.pipe';


@Pipe({
  name: 'monthDate',
})
export class MonthDatePipe implements PipeTransform {

  static readonly format = 'MMMM yyyy';


  constructor(private readonly dateWrapperPipe: DateWrapperPipe) {
  }


  transform(value: string): string {
    return this.dateWrapperPipe.transform(value, MonthDatePipe.format);
  }

}
