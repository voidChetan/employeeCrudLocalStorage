import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: any, printVal: string): any {
    if (value != '' && value != null && value != undefined) {
      return value;
    } else {
      return printVal;
    }
  }

}
