import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-default',
  templateUrl: './accordion-default.component.html',
  styleUrls: ['./accordion-default.component.scss']
})
export class AccordionDefaultComponent implements OnInit {
  @Input() componentData:any;

  data:any;
  constructor() { }

  ngOnInit(): void {
  this.data = this.componentData.data;
  }

}
