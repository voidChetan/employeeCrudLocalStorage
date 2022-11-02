import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhone]'
})
export class PhoneDirective {

  constructor(private elentRef:ElementRef) { }
  @HostListener('mouseover')
  onMouseOver() {
   this.elentRef.nativeElement.style.color="red";
  }

  @HostListener('mouseout')
  onMouseOut() {
   this.elentRef.nativeElement.style.color="black";
  }
  @HostListener('wheel')
  onMouseWheel() {
  console.log("on scrioll");
  }
}
