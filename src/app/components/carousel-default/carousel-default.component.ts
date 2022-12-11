import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-default',
  templateUrl: './carousel-default.component.html',
  styleUrls: ['./carousel-default.component.scss']
})
export class CarouselDefaultComponent implements OnInit {
  @Input() data:any ={eyebrow:'hoooo'};

  constructor() { }

  ngOnInit(): void {
  }

}
