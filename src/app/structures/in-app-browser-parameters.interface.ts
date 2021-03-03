import { InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';


export interface InAppBrowserParameters {

  redirectUrl: string;
  target: string;
  pageContent?: string;
  options?: InAppBrowserOptions;
  base64?: boolean;

}
