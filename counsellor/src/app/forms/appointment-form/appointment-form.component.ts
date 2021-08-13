import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/classes/appointment';
import  { AppointmentService } from 'src/app/shared/appointment.service'

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
 bookAppointment= new Appointment(new Date(),'','','')

  constructor(private bookService: AppointmentService) { }

  ngOnInit(): void {
  }
  bookSession(){
    this.bookService.bookSession(this.bookAppointment).subscribe(data =>{
      console.log(data)
    })
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.bookAppointment, null, 4));
  }

}

