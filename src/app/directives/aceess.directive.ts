import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAceess]'
})
export class AceessDirective {

  role:string;
  constructor(private elentRef:ElementRef) {
    debugger
    this.role= localStorage.getItem('role');
    if(this.role != 'admin'){
      this.elentRef.nativeElement.style.display="none";
    }
   }


}
