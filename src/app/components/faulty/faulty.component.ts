import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faulty',
  templateUrl: './faulty.component.html',
  styleUrls: ['./faulty.component.scss']
})
export class FaultyComponent implements OnInit {
  @Input() componentData:any;
  
  data: any;
  
  constructor() { }

  ngOnInit(): void {
    this.data = this.componentData.data;
  }

}
