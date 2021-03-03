import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, args: any): Array<any> {
    return _.sortBy(array, args);
  }

}
