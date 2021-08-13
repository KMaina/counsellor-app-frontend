import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounsellorServiceService {

  constructor(private httpclient: HttpClient) { }
  

  getappointments(): Observable<any>{
    return this.httpclient.get('https://mindhealth254.herokuapp.com/api/book')
  }



  getallusers(): Observable<any> {
    return this.httpclient.get('https://mindhealth254.herokuapp.com/users')
  }
}
