import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { data } from '../mock-data';
import { IDATA } from '../interface/data';
import { Observable, of } from 'rxjs';


const headers = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DataService {


  // this is for the localhost data
  // private apiURL = "http://localhost:5000/data"
  private apiURL = "https://my-json-server-angular.herokuapp.com/data"


  constructor(private http: HttpClient) { }


  // getData():Observable<IDATA[]>{
  //   return of(data);
  // }


  getData():Observable<IDATA[]>{
    return this.http.get<IDATA[]>(this.apiURL)
  }

  deleteData(data:IDATA):Observable<IDATA>{
    return this.http.delete<IDATA>(`${this.apiURL}/${data.id}`)
  }

  toggleData(data:IDATA):Observable<IDATA>{
    return this.http.put<IDATA>(`${this.apiURL}/${data.id}`, data, headers)

  }

  addData(data: IDATA): Observable<IDATA>{
    return this.http.post<IDATA>(this.apiURL, data, headers)
  }
}
