import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HightlightDirective implements OnInit {
  @Input() color: string = '';
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    console.log('ngOnInit')
  }
  @HostListener('mouseover')
  onHover() {
    this.elementRef.nativeElement.style.color = this.color;
  }
  @HostListener('mouseout')
  onLeave() {
    this.elementRef.nativeElement.style.color = "black";
  }
}
