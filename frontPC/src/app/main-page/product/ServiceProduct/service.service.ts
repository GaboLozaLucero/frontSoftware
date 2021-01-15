import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from '../product';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  ProductUrl: string = 'http://localhost:8080/v1/product';
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  createProduct(product: any): Observable<any>{
    return this.http.post<any>(this.ProductUrl, product);
  }

}
