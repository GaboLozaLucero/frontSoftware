import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{
  Url: string = 'http://localhost:8080/v1/user';
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  createUser(user: any): Observable<any>{
    return this.http.post<any>(this.Url, user);
  }
}
