import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flipkart } from '../models/flipkart';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {
private baseurl="https://sheetdb.io/api/v1/tczl58cgrx53k";
  constructor(private http:HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`)
  }
  getbyemail(email:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/searchbyemail?=${email}`)
  }
  adduser(record:Flipkart):Observable<any[]>{
    return this.http.post<any[]>(this.baseurl,{data:record})
  }
  deleteuser(id:number):Observable<any[]>{
    return this.http.delete<any[]>(`${this.baseurl}/id?=${id}`)
  }
updateuser(id:number,record:Flipkart):Observable<any[]>{
  return this.http.put<any[]>(`${this.baseurl}/id?=${id}`,{data:record})}
}
