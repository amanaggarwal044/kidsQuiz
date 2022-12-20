import { Directive, ElementRef } from "@angular/core";


@Directive({
    selector: '[hoverEffectDirective]',  //<p hoverEffectDirective></p>
    // selector: 'hoverEffectDirective',  <hoverEffectDirective>This is eelement</hoverEffectDirective>
})
export class hoverEffectDirective {

    constructor(private element: ElementRef){
    }

    ngOnInit(){
      console.log(this.element.nativeElement.text);
    }
}



// It has construcotr lifecycle hooks and behaves like just an component
// we are making our custom directive so we have to iclude it mannualy in declarations same as components