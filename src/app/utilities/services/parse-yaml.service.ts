import { Injectable } from '@angular/core';
import { parse } from 'yaml';
import { catchError,map, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParseYamlService {
data: any;
  constructor(private http: HttpClient) {}

  public getYaml(fileName: string, fileAbsolutePath: string = ''): Observable<any> {
    fileAbsolutePath == ''? fileAbsolutePath = `assets/content/` : fileAbsolutePath = `${fileAbsolutePath}`;
    fileName.includes('.yaml') ? fileName = fileName : fileName = `${fileName}.yaml`;
    let url = `${fileAbsolutePath}${fileName}`;
    

    return this.http
      .get(url, {
        reportProgress: true,
        observe: 'body',
        responseType: 'text', // This one here tells HttpClient to parse it as text, not as JSON
      },)
      .pipe(
        // Map used to change Yaml to JavaScript Object and reads as JSON
        // without it reads yaml and give /r and /n in string
        map((yamlString) => parse(yamlString)),
        retry(1),
        catchError((error) => {
          return error;
        })
      );
  }  
}



// (method) HttpClient.get(url: string, 
//   options: {
//     headers?: HttpHeaders | {
//       [header: string]: string | string[];} | undefined;
//   context?: HttpContext | undefined;
//   observe?: "body" | undefined;
//   params?: HttpParams | ... 1 more ... | undefined;
//   reportProgress?: boolean | undefined;
//   responseType: "arraybuffer";
//   withCredentials?: boolean | undefined;
// }): Observable<...> (+14 overloads)