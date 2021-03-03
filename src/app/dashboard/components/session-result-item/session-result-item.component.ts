import { Component, Input } from '@angular/core';

import { BAC_MAX_VALUE } from '../../types';
import { SessionResult } from '../../structures';


@Component({
  selector: 'session-result-item',
  templateUrl: 'session-result-item.component.html',
  styleUrls: ['session-result-item.component.scss'],
})
export class SessionResultItemComponent {

  maxBloodAlcoholConcentration: number;

  @Input() record: SessionResult;


  constructor() {
    this.maxBloodAlcoholConcentration = BAC_MAX_VALUE;
  }

}
