import { Component, OnInit } from '@angular/core';
import { parse } from 'yaml';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parse-yaml',
  templateUrl: './parse-yaml.component.html',
  styleUrls: ['./parse-yaml.component.scss']
})
export class ParseYamlComponent implements OnInit {
  parsedYamlObject:any;

  constructor(private http: HttpClient) {
    this.getJson().subscribe((data) => {
      this.parsedYamlObject = data;
      // console.log(data);
    });
  }
  ngOnInit(): void {
  }


  public getJson(): Observable<any> {
    return this.http
      .get('./assets/data/home.yaml', {
        observe: 'body',
        responseType: 'text', // This one here tells HttpClient to parse it as text, not as JSON
      })
      .pipe(
        // Map Yaml to JavaScript Object and reads as JSON
        // without it reads yaml and give /r and /n in string
        map((yamlString) => parse(yamlString))
      );
  }
}