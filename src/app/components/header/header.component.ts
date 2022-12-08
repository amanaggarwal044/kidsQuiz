import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inputSearch:string= '';
  constructor() { }

  ngOnInit(): void {
  }

  getInput(event:any) {
    this.inputSearch=event.target.value;
  }

}
