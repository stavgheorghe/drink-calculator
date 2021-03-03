import { Pipe, PipeTransform } from '@angular/core';

import { DateWrapperPipe } from './date-wrapper.pipe';


@Pipe({
  name: 'shortDate',
})
export class ShortDatePipe implements PipeTransform {

  static readonly format = 'dd.MM.yyyy';


  constructor(private readonly dateWrapperPipe: DateWrapperPipe) {
  }


  transform(value: string): string {
    return this.dateWrapperPipe.transform(value, ShortDatePipe.format);
  }

}
