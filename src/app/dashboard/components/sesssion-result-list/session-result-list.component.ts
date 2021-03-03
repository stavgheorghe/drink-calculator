import { Component } from '@angular/core';

import { SessionResult } from '../../structures';

@Component({
  selector: 'session-result-list',
  templateUrl: 'session-result-list.component.html',
  styleUrls: ['session-result-list.component.scss'],
})
export class SessionResultListComponent {

  sessionResultList: Array<SessionResult>

  constructor() {
    this.sessionResultList = [
      {
        date: '2021-03-03T14:03:59.535Z',
        bloodAlcoholConcentration: 0.123,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.231,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.345,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.645,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.445,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.023,
      },
      {
        date: '2021-03-03T14:03:59.535Z',
        bloodAlcoholConcentration: 0.123,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.231,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.345,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.645,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.445,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.023,
      },
      {
        date: '2021-03-03T14:03:59.535Z',
        bloodAlcoholConcentration: 0.123,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.231,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.345,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.645,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.445,
      },
      {
        date: new Date().toISOString(),
        bloodAlcoholConcentration: 0.023,
      },
    ];
  }

}
