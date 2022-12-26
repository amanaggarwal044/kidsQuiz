import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-default',
  templateUrl: './hero-default.component.html',
  styleUrls: ['./hero-default.component.scss']
})
export class HeroDefaultComponent implements OnInit {
  @Input() componentData:any;

  data:any;  
  config:any;  

  blockClass: string = 'hero-default' 

  constructor() {
   }

  ngOnInit(): void {
    this.data = this.componentData.data;
    this.config = this.componentData.config;
    console.log(this.config);
  }
}
