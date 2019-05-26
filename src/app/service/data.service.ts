import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
api:string;
apiAdd:string;
  constructor(private http: HttpClient) { 
    this.api = "https://jsonplaceholder.typicode.com/";
    this.apiAdd = "https://jsonplaceholder.typicode.com/photos";

  }
  getHero(id: number): Observable<any> {
    const url = `${this.apiAdd}/${id}`;
    return this.http.get(url);
  }
  public getHttp(key): Observable<any>{
    return this.http.get(this.api +key);
  }

  public deleteHttp(key): Observable<any>{
    return this.http.delete(this.api +key);
  }
}
