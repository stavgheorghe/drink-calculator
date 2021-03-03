import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import {
  PageHeaderComponent, ProgressBarComponent,
} from './components';
import {
  DateWrapperPipe,
  FormatNumberPipe,
  LongDateAndTimePipe,
  LongDatePipe,
  MonthDatePipe,
  RemoveWhiteSpacePipe,
  SafeHtmlPipe,
  ShortDatePipe,
  TransformToCssBgPipe,
} from './pipes';
import {
  ClickOutsideDirective,
} from './directives';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClickOutsideDirective,
    DateWrapperPipe,
    FormatNumberPipe,
    LongDateAndTimePipe,
    LongDatePipe,
    MonthDatePipe,
    SafeHtmlPipe,
    ShortDatePipe,
    TransformToCssBgPipe,
    PageHeaderComponent,
    RemoveWhiteSpacePipe,
    ProgressBarComponent,
  ],
  exports: [
    ClickOutsideDirective,
    DateWrapperPipe,
    FormatNumberPipe,
    LongDateAndTimePipe,
    LongDatePipe,
    MonthDatePipe,
    SafeHtmlPipe,
    ShortDatePipe,
    TransformToCssBgPipe,
    PageHeaderComponent,
    RemoveWhiteSpacePipe,
    ProgressBarComponent,
  ],
  providers: [
  ],
})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        DateWrapperPipe,
        FormatNumberPipe,
        LongDateAndTimePipe,
        LongDatePipe,
        MonthDatePipe,
        SafeHtmlPipe,
        ShortDatePipe,
        TransformToCssBgPipe,
      ],
    };
  }


  static forChild(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

}
