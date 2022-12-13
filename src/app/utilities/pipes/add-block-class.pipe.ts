import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addBlockClass'
})
export class AddBlockClassPipe implements PipeTransform {

  transform(elementClass: string, blockClass: string , modifierClass: string = ''): string {
    if (!elementClass) { 
      return '';
    } else {
      if (!blockClass) {
        return elementClass;
      } else {
        if(modifierClass == '') {
          return (blockClass+'__'+elementClass);
        }
        return (blockClass + '__' + elementClass + '--' + modifierClass);
      }
    }
  }

}
