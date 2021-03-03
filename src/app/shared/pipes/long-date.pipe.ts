import { Pipe, PipeTransform } from '@angular/core';

import { DateWrapperPipe } from './date-wrapper.pipe';


@Pipe({
  name: 'longDate',
})
export class LongDatePipe implements PipeTransform {

  static readonly format = 'dd MMMM yyyy';


  constructor(private readonly dateWrapperPipe: DateWrapperPipe) {
  }


  transform(value: string): string {
    return this.dateWrapperPipe.transform(value, LongDatePipe.format);
  }

}
