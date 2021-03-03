import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatNumber',
})
export class FormatNumberPipe implements PipeTransform {

  transform(nrToFormat: number | string, formatType = '1.2-2'): string {
    if (nrToFormat === undefined || nrToFormat === null) {
      return '';
    }

    const decimalLocale = new DecimalPipe('en');
    const transformedValue = decimalLocale.transform(nrToFormat, formatType);
    const replaceSpaces = transformedValue.replace(/,/g, ' ');

    return replaceSpaces;
  }

}
