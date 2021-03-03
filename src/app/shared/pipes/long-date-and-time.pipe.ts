import { Pipe, PipeTransform } from '@angular/core';

import { DateWrapperPipe } from './date-wrapper.pipe';


@Pipe({
  name: 'longDateAndTime',
})
export class LongDateAndTimePipe implements PipeTransform {

  static readonly format = 'dd MMM yyyy HH:mm';


  constructor(private readonly dateWrapperPipe: DateWrapperPipe) {
  }


  transform(value: string): string {
    return this.dateWrapperPipe.transform(value, LongDateAndTimePipe.format);
  }

}
