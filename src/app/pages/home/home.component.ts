import { AfterContentInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AccordionDefaultComponent } from 'src/app/components/accordion-default/accordion-default.component';
import { CarouselDefaultComponent } from 'src/app/components/carousel-default/carousel-default.component';
import { FaultyComponent } from 'src/app/components/faulty/faulty.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , AfterContentInit{
@ViewChild('container',{read: ViewContainerRef,static: true}) container!: ViewContainerRef;

componentNames: any ={
HeroComponent: 'hero',
CarouselDefaultComponent: 'carousel-default',
AccordionDefaultComponent:'accordion-default'
}

test: any = [];

  constructor() {
  this.test = [{componentType:'hero',data:{eyebrow:'MAke my trip'}}]
  }

  ngOnInit(): void {
  }

  
  ngAfterContentInit(): void {
    this.container.clear();  //it will clear the container and removes previous rendered component
    
    
    for(let i=0;i<this.test.length;i++){
      let componentType = this.getComponentType(this.test[i].componentType);
      this.container.createComponent(componentType);
      this.container.createComponent(componentType).instance.data= this.test[i].data; 
    }
  }


  getComponentType(componentType:string) : any {
    let type: any = FaultyComponent;

    switch(componentType) {
      case this.componentNames.HeroComponent: {
        type = HeroComponent
        break;
      }
      case this.componentNames.CarouselDefaultComponent: {
        type = CarouselDefaultComponent
        break;
      }
      case this.componentNames.AccordionDefaultComponent: {
        type = CarouselDefaultComponent
        break;
      }

    }
    

    return type;
  }
}
