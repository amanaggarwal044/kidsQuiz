import {AfterContentInit,Component,OnInit,ViewChild,ViewContainerRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { AccordionDefaultComponent } from 'src/app/components/accordion/accordion-default/accordion-default.component';
import { CarouselDefaultComponent } from 'src/app/components/carousel/carousel-default/carousel-default.component';
import { FaultyComponent } from 'src/app/components/faulty/faulty.component';
import { HeroDefaultComponent } from 'src/app/components/hero/hero-default/hero-default.component';
import { ParseYamlService } from 'src/app/utilities/services/parse-yaml.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterContentInit {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  path: any;
  allComponentsConfig: any = {};
  componentConfig: any = {};

  test: any = [];

  constructor(private _activeRoute:ActivatedRoute, private _parseYamlService: ParseYamlService) {
    this.path=_activeRoute.snapshot.params;
    console.log(this.path,"constructor");
    // this.test = [{componentType:'hero',data:{eyebrow:'MAke my trip'}},{componentType:'carousel-default',data:{eyebrow:'this is carousel'}}]
    // add metadata too
    this.test ={meta:{title:'HomePage', description: 'fsfdfdfdf', meta_image: 'sgv.jpg'}, components:[
      {componentType: 'hero-default', data: { 
            componentName: 'home-page-hero',
        eyebrow: {value:'this is hero eyerbrow',customClass:'abc'},
        heading: {value:'this is hero heading',customClass:'abc'},
        cta: {label: 'Home', url:'/home',aria_label: 'home', external: false, customClass:'abc', icon: 'icon-svg', iconPrefix: false},
        image: {src:'icon-svg',customClass:'abc'},
        video: {src:'icon-svg',repeat: false, customClass:'abc'},
        uiConfig: {type: 'primary', is_reverse: false, theme: 'light', is_full_bleed: false }
      } },
      {componentType: 'carousel-default', data: {componentName: 'home-page-carousel', eyebrow: 'this is carousel' },},
      {componentType: 'accordion-default', data: {componentName: 'home-page-accordion', eyebrow: 'this is accordion' },},
      { componentType: 'abc'},
      { componentType: 'hero-default' },
      {}
    ]};
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.run();
  }

  async run() {
    let configData = new Promise((resolve, reject) => {
      this._parseYamlService.getYaml('globals').subscribe((data: any) => {
        resolve(data);
      },(error)=>{
        reject(error);
      });
    });

    await configData
      .then((data)=>{this.allComponentsConfig = data; console.log(data); return true;},(error)=>{console.log(error); return false;})
      .then((data)=>{console.log(data); this.renderComponent();})

    console.log('RESOLVRED')

  }

  renderComponent() {
    this.container.clear(); //it will clear the container and removes previous rendered component

    for (let i = 0; i < this.test.components.length; i++) {
      let component = this.test.components[i];
      let componentType = this.getComponentType(component.componentType);
      if (componentType == FaultyComponent) {
        this.container.createComponent(componentType).setInput('componentData', {data: 'warning unknown component used'});
      } else if(componentType !== FaultyComponent && this.test.components[i].data !== undefined) {
        this.componentConfig = this.allComponentsConfig[component.data.componentName];
        this.container.createComponent(componentType).setInput('componentData', {data: component.data,config: this.componentConfig});
      } else if(componentType !== FaultyComponent && this.test.components[i].data == undefined) {
           this.container.createComponent(componentType).setInput('componentData', {data: undefined, config: {}});

      }
    }
  }

  // alias name of our components so that we dont have to give full name of our components
  componentNames: any = {
    HeroComponent: 'hero-default',
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
        type = HeroDefaultComponent;
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
