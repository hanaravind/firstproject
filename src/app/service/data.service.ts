import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
api:string;

  constructor(private http: HttpClient) { 
    this.api = "https://jsonplaceholder.typicode.com/";
  }

  public getHttp(key): Observable<any>{
    return this.http.get(this.api +key);
  }

  public deleteHttp(): Observable<any>{
    return this.http.delete(this.api);
  }
}
