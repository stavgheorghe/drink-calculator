import { Component } from '@angular/core';

import { SessionResult } from '../../structures';
import { SessionResultsService } from '../../services';

@Component({
  selector: 'session-result-list',
  templateUrl: 'session-result-list.component.html',
  styleUrls: ['session-result-list.component.scss'],
})
export class SessionResultListComponent {

  sessionResultList: Array<SessionResult>

  constructor(private readonly sessionResultsService: SessionResultsService) {
    this.sessionResultsService.getSessionResults().subscribe((value:  Array<SessionResult>) => {
      this.sessionResultList = value;
    })
  }

}
