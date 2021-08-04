import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  api_url='http://127.0.0.8000';
  constructor(private http: HttpClient) { }
  getProfile():Observable<any>{
    return this.http.get(this.api_url+ '/profile')
  }
}
