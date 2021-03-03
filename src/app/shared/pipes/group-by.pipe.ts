import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'groupBy',
})
export class GroupByPipe implements PipeTransform {

  constructor() {
  }


  transform(list: Array<any>, property: string): Array<{key: string; items: Array<any>}> {
    const result = [];
    if (!property) {
      return result;
    }

    const groupedItems = _.groupBy(list, property);
    _.forEach(groupedItems, (value, key) => {
      result.push({
        key: key,
        items: value,
      });
    });

    return result;
  }

}
