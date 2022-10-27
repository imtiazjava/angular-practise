import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService { 
  //private url:string='https://jsonplaceholder.typicode.com/todos';
  private url:string='../assets/data/db.json';
  constructor(private http:HttpClient) {
   }
   getProducts():Observable<any[]>{
      return this.http.get<any[]>(this.url);
   }
}
