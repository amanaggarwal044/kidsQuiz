import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  data:any;

  constructor(private _http:HttpClient) { 
 }

  // getMusic():Observable<any>{
  //   return this._http.get('assets/data/data.json')
  // }

  // deleteMusic():Observable<any>{
  //   return this._http.delete('assets/data/data.json')
  // }
}
