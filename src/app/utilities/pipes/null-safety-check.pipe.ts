import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullSafetyCheck'
})
export class NullSafetyCheckPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    if(value == undefined) {
      return '';
    } else {
      return value;
    }


  }

}
