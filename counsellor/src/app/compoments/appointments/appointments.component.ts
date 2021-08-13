import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { Appointment } from 'src/app/classes/appointment';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  public successMsg!: string;
  public errorMsg!: string;
  date!: Date;
  timeStart!: string;
  timeEnd!: string;
  message!: string;


  // bookAppointment!: Appointment


  bookAppointment : Appointment



  constructor(private bookService: AppointmentService) { }

  ngOnInit(): void {
  }


  bookSession() {
    this.bookService.bookSession(this.bookAppointment).subscribe(data => {
      console.log(data)
    })
  }

  // bookSession() {
  //   this.successMsg = '';
  //   this.errorMsg = '';
  //   this.appointmentService.bookSession(this.date, this.timeStart, this.timeEnd, this.message,)
  //     .subscribe((bookAppointment: Appointment) => {
  //       this.date = new Date();
  //       this.timeStart = '';
  //       this.timeEnd = '';
  //       this.message = '';
  //       // const appointmentDate = new Date(bookAppointment.date).toDateString();
  //       // this.successMsg = `Appointment Booked Successfully for ${appointmentDate}`;
  //     },
  //       (error: ErrorEvent) => {
  //         this.errorMsg = error.error.message;
  //       });
  // }



  



  

  

}
