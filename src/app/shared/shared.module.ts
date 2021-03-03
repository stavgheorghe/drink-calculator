import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import {
  PageHeaderComponent,
} from './components';
import {
  DateWrapperPipe,
  FormatNumberPipe,
  GroupByPipe,
  LongDateAndTimePipe,
  LongDatePipe,
  MonthDatePipe,
  RemoveWhiteSpacePipe,
  SafeHtmlPipe,
  ShortDatePipe,
  SortByPipe,
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
    GroupByPipe,
    LongDateAndTimePipe,
    LongDatePipe,
    MonthDatePipe,
    SafeHtmlPipe,
    ShortDatePipe,
    SortByPipe,
    TransformToCssBgPipe,
    PageHeaderComponent,
    RemoveWhiteSpacePipe,
  ],
  exports: [
    ClickOutsideDirective,
    DateWrapperPipe,
    FormatNumberPipe,
    GroupByPipe,
    LongDateAndTimePipe,
    LongDatePipe,
    MonthDatePipe,
    SafeHtmlPipe,
    ShortDatePipe,
    SortByPipe,
    TransformToCssBgPipe,
    PageHeaderComponent,
    RemoveWhiteSpacePipe,
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
        GroupByPipe,
        LongDateAndTimePipe,
        LongDatePipe,
        MonthDatePipe,
        SafeHtmlPipe,
        ShortDatePipe,
        SortByPipe,
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
