import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/classes/appointment';
import { AppointmentService } from 'src/app/shared/appointment.service';
@Component({
  selector: 'app-client-groups',
  templateUrl: './client-groups.component.html',
  styleUrls: ['./client-groups.component.css']
})
export class ClientGroupsComponent implements OnInit {
  username: string;
  group: Group
  constructor(private groupService: AppointmentService) { }

  ngOnInit(): void {
    // this.username = localStorage.getItem('username')

  }
    showGroup(){
      return this.groupService.getGroup().subscribe(group=>{
        console.log(group)
        this.group=group
      })
    }
      


    
}
