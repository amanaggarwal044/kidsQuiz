import {
  AfterContentInit,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AccordionDefaultComponent } from 'src/app/components/accordion-default/accordion-default.component';
import { CarouselDefaultComponent } from 'src/app/components/carousel-default/carousel-default.component';
import { FaultyComponent } from 'src/app/components/faulty/faulty.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  test: any = [];

  constructor() {
    // this.test = [{componentType:'hero',data:{eyebrow:'MAke my trip'}},{componentType:'carousel-default',data:{eyebrow:'this is carousel'}}]
    this.test = [
      { componentType: 'hero', data: { 
        eyebrow: {value:'this is hero eyerbrow',customClass:'abc'},
        heading: {value:'this is hero heading',customClass:'abc'},
        cta: {url:'/home',customClass:'abc'},
        image: {src:'icon-svg',customClass:'abc'},
        video: {src:'icon-svg',customClass:'abc'},
        uiConfig: 'teritary'
      } },
      {componentType: 'carousel-default', data: { eyebrow: 'this is carousel' },},
      { componentType: 'abc' },
      { componentType: 'hero' }
    ];
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.container.clear(); //it will clear the container and removes previous rendered component

    for (let i = 0; i < this.test.length; i++) {
      let componentType = this.getComponentType(this.test[i].componentType);
      if (componentType == FaultyComponent) {
        this.container
          .createComponent(componentType)
          .setInput('data', { warning: 'unknown component used' });
      } else {
        this.container
          .createComponent(componentType)
          .setInput(
            'data',
            this.test[i].data
          );
      }
    }
  }

  // alias name of our components so that we dont have to give full name of our components
  componentNames: any = {
    HeroComponent: 'hero',
    CarouselDefaultComponent: 'carousel-default',
    AccordionDefaultComponent: 'accordion-default',
  };


  // to valid the component its present or not in our project and to get a original coponent back from its alias name
  getComponentType(componentType: string): any {
    //this is by faulty component which tell us the component we get from backend is not correct
    let type: any = FaultyComponent;

    //we have to use lowercase so that case senstivity is removed and we will get our comp whether its HERO or hero
    componentType != undefined ? componentType= componentType.toLocaleLowerCase() : componentType = '';
    switch (componentType) {
      case this.componentNames.HeroComponent: {
        type = HeroComponent;
        break;
      }
      case this.componentNames.CarouselDefaultComponent: {
        type = CarouselDefaultComponent;
        break;
      }
      case this.componentNames.AccordionDefaultComponent: {
        type = AccordionDefaultComponent;
        break;
      }
    }

    return type;
  }
}
