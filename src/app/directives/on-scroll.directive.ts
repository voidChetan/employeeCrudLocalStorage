import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appOnScroll]'
})
export class OnScrollDirective {

  @Output() onScrollEvent = new EventEmitter<any>();
  constructor() { }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

    console.log('on Scrill');
    this.onScrollEvent.emit();
  }

}
