import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faulty',
  templateUrl: './faulty.component.html',
  styleUrls: ['./faulty.component.scss']
})
export class FaultyComponent implements OnInit {
  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
