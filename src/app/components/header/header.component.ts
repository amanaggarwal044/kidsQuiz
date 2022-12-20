import { Component, OnInit } from '@angular/core';
import { ParseYamlService } from 'src/app/utilities/services/parse-yaml.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  inputSearch:string= '';
  parsedYamlObject:any;
  blockClass: string = 'header' 

  getInput(event:any) {
    this.inputSearch=event.target.value;
  }

  constructor(private _parseYamlService: ParseYamlService) {}

  ngOnInit(): void {
    this._parseYamlService.getYaml('header').subscribe((data) => {
      this.parsedYamlObject = data;
    });
  }

}
