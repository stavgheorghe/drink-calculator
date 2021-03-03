import * as _ from 'lodash';

import { AlertButton, AlertOptions } from '@ionic/core';


export class AlertBuilder {

  private additionalOptions: AlertOptions;
  private backdropDismiss: boolean;
  private readonly alertButtons: Array<AlertButton>;
  private readonly alertCssClasses: Array<string>;
  private readonly defaultButton: AlertButton;
  private readonly message: string;


  constructor(message: string) {
    this.backdropDismiss = false;
    this.message = message;
    this.alertButtons = [];
    this.alertCssClasses = ['alert'];
    this.defaultButton = {role: 'cancel', text: 'OK'};
  }


  useDefaultButton(button?: AlertButton | any): AlertBuilder {
    this.alertButtons.push(button ? this.mergeDefaultButtonConfig(button) : this.defaultButton);

    return this;
  }


  addOptions(options: AlertOptions): AlertBuilder {
    this.additionalOptions = options;

    return this;
  }


  addCustomButton(button: AlertButton | any): AlertBuilder {
    this.alertButtons.push(button);

    return this;
  }


  addCustomCssClass(className: string): AlertBuilder {
    this.alertCssClasses.push(className);

    return this;
  }


  enableDismiss(): AlertBuilder {
    this.backdropDismiss = true;

    return this;
  }


  build(): AlertOptions {
    const buttons = (this.alertButtons.length ? this.alertButtons : [this.defaultButton]);
    const defaultOptions: AlertOptions = {
      mode: 'md',
      cssClass: this.alertCssClasses,
      backdropDismiss: this.backdropDismiss,
      message: this.message,
      buttons: buttons,
    };

    return {...defaultOptions, ...this.additionalOptions};
  }


  private mergeDefaultButtonConfig(button: AlertButton | any): AlertButton {
    return _.merge({}, this.defaultButton, button);
  }

}
