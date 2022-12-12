import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkUIConfig'
})
export class CheckUIConfigPipe implements PipeTransform {
  arrUIConfig :string[] = ['primary','secondary','teritary'];

  transform(uiConfig: string, ...args: unknown[]): boolean{    
    if(!uiConfig) return false;
    
   if(this.arrUIConfig.includes(uiConfig.toLocaleLowerCase()))
   {
     return true;
   }
     return false;
  }
}
