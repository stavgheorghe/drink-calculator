import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: ['progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {

  @Input() value: number;
  @Input() maxValue: number;

  progress: number;


  constructor() {
  }


  ngOnInit() {
    this.progress = (this.value / this.maxValue) * 100;
  }

}
