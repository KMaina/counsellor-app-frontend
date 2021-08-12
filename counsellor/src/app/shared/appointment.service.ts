import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Appointment, Group, Medication } from '../classes/appointment';


const api_url = "http://127.0.0.1:8000/";

const httpOptions = {
  headers: new HttpHeaders({'Authorization':'Bear', 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 
 api_url = "http://127.0.0.1:8000/";
  constructor(private http: HttpClient, ) { }

  bookSession(appointment:Appointment): Observable<any> {
    const headers = { 'Authorization': 'Bearer access','content-type': 'application/json'}  
    // const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    // const header = new HttpHeaders().set('Authorization', this.tokenType + this.cookieService.get('token')); // may be localStorage/sessionStorage
    //         const headers = { headers: header };
    const body=JSON.stringify(appointment);
    console.log(body)
    return this.http.post(this.api_url + 'api/book-appointment', body,{'headers':headers, observe: 'response'}) .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )
    )
  }
  getGroup(): Observable<any>{
    return this.http.get(this.api_url,)

  }
  describeMedication(medication:Medication):Observable<any>{
    const headers = { 'Authorization': 'Bearer access','content-type': 'application/json'}  
    const body=JSON.stringify(medication);
    return this.http.post(this.api_url+'/medication', body,{'headers':headers, observe: 'response'}).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }
    )
    )
  }
  }
 


