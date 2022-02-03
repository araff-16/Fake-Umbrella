import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Models/Customer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getRequest(url: string): Observable<any> {
    return this.http.get(url)
  }

  postRequest(url: string, customer: Customer ): Observable<any> {
    return this.http.post(url, customer);
  }

  deleteRequest(url: string): Observable<any> {
    return this.http.delete(url);
  }

  putRequest(url: string, customer: Customer): Observable<any> {
    return this.http.put(url, customer);
  }

}
