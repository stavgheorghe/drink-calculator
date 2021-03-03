import { Injectable } from '@angular/core';

import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';

import { InAppBrowserParameters } from 'app/structures';


@Injectable()
export class OpenExternalUrlService {

  constructor(private readonly inAppBrowser: InAppBrowser) {
  }


  open(data: InAppBrowserParameters): InAppBrowserObject {
    const urlString = (data.base64 && data.pageContent) ? 'data:text/html;base64,' + btoa(data.pageContent) : data.redirectUrl;

    return this.inAppBrowser.create(urlString, data.target, data.options);
  }

}
