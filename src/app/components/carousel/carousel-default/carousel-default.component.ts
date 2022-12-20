import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-default',
  templateUrl: './carousel-default.component.html',
  styleUrls: ['./carousel-default.component.scss']
})
export class CarouselDefaultComponent implements OnInit {
  @Input() componentData:any;
  
  data:any;  

  constructor() { }

  ngOnInit(): void {
    this.data = this.componentData.data;
  }

}
