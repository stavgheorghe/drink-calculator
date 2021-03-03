import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { detach } from 'app/core';


@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective implements OnDestroy, OnInit {

  @Output() clickOutside: EventEmitter<Event>;


  constructor(private readonly elementRef: ElementRef) {
    this.clickOutside = new EventEmitter<Event>();
  }


  ngOnInit() {
    detach(() => {
      document.body.addEventListener('touchstart', this.onTouch);
      document.body.addEventListener('keyup', this.onTab);
    });
  }


  ngOnDestroy() {
    document.body.removeEventListener('touchstart', this.onTouch);
    document.body.removeEventListener('keyup', this.onTab);
  }


  private readonly onTouch = (event: Event) => {
    if (this.elementRef && !this.elementRef.nativeElement.contains(event.target)) {
      this.clickOutside.emit(event);
    }
  }


  private readonly onTab = (event: Event) => {
    if (((<any> event).keyCode === 9)) {
      this.onTouch(event);
    }
  }

}
