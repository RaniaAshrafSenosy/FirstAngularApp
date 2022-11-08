import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor( private _httpclient:HttpClient) { }
  getData():Observable<any>{
    return this._httpclient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  }
}
