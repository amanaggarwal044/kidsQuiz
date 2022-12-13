import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-default',
  templateUrl: './hero-default.component.html',
  styleUrls: ['./hero-default.component.scss']
})
export class HeroDefaultComponent implements OnInit {
  @Input() data:any;

  blockClass: string = 'hero-default' 

  constructor() {
   }

  ngOnInit(): void {
    console.log(this.data);
  }
}
