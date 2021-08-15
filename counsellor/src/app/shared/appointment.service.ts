import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { Appointment } from './user.model';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
  
export class AppointmentService {

  api_url = "http://127.0.0.1:8000/";

  constructor(private http: HttpClient) { }

  // getAppointments(): Observable<Appointment[]> {
  //   return this.http.get<Appointment[]>(`${this.BASE_URL}/appointments`);
  // }

  // bookSession(date: Date, timeStart: string, timeEnd: string, message: string): Observable<Appointment> {
  //   return this.http.post<Appointment>(`${this.BASE_URL}/api/book-appointment`, { date, timeStart, timeEnd, message });
  // }

  // cancelAppointment(id: string): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/appointments/${id}`);
  // }


  bookSession(appointment: Appointment): Observable<any> {
    const headers = { 'content-type': 'application/json', 'Authorization': 'Bearer access' }
    const body = JSON.stringify(appointment);
    console.log(body)
    return this.http.post(this.api_url + 'api/book/', body, { 'headers': headers, observe: 'response' }).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }
      )
    )
  }
  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(this.api_url, appointment, httpOptions)
    console.log(appointment)
  }
  deleteAppointment(id: number): Observable<unknown> {
    const url = `${this.api_url}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)

  }
}
