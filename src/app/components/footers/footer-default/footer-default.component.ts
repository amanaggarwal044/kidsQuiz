import { Component, Input, OnInit } from '@angular/core';
import { ParseYamlService } from 'src/app/utilities/services/parse-yaml.service';


@Component({
  selector: 'app-footer-default',
  templateUrl: './footer-default.component.html',
  styleUrls: ['./footer-default.component.scss']
})
export class FooterDefaultComponent implements OnInit{
  @Input() componentData:any;

  data:any; 
  blockClass: string = 'footer-default' 


  constructor(private _parseYamlService: ParseYamlService) {}

  ngOnInit(): void {
    this.data = this.componentData.data;
    this.data == undefined ? this._parseYamlService.getYaml('footer').subscribe((parsedSData) => {
      this.data = parsedSData;
    }) : '' ;
  }
}
