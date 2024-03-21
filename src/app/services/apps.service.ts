import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  Q_URL:string="https://dummyjson.com/quotes"

  constructor(private http:HttpClient) { }

  getQuotesAPI(){
    return this.http.get(`${this.Q_URL}`)
  }

 
}
