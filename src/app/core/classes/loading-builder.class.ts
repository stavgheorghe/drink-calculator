import { LoadingOptions } from '@ionic/core';


export class LoadingBuilder {

  private readonly message: string;
  private readonly duration: number;


  constructor(message: string, duration?: number) {
    this.message = message;
    this.duration = duration || 1000;
  }


  build(): LoadingOptions {
    return {
      message: this.message,
      duration: this.duration,
      // tslint:disable-next-line:no-null-keyword
      spinner: null,
    };
  }

}
