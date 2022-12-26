import { Component, Input, OnInit } from '@angular/core';
import { ParseYamlService } from 'src/app/utilities/services/parse-yaml.service';

@Component({
  selector: 'app-header-default',
  templateUrl: './header-default.component.html',
  styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent {
  @Input() componentData:any;

  data:any;  
  
  inputSearch:string= '';
  blockClass: string = 'header-default' 

  getInput(event:any) {
    this.inputSearch=event.target.value;
  }

  constructor(private _parseYamlService: ParseYamlService) {}

  ngOnInit(): void {
    this.data = this.componentData.data;
    this.data == undefined ? this._parseYamlService.getYaml('header').subscribe((parsedSData) => {
      this.data = parsedSData;
    }) : '' ;
  }
}