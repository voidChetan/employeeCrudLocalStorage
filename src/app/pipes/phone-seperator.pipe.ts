import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneSeperator'
})
export class PhoneSeperatorPipe implements PipeTransform {

  transform(value: string): string {
    debugger;
    if(value != ''  && value !==null) {
      return value.replace("-","");
    } else {
      return value;
    }
   
  }

}
