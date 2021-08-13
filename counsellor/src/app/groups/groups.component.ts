import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared/appointment.service';
import { Groups } from '../shared/user.model';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  newGroup = new Groups("", "", "");
  constructor(private groupService: AppointmentService) { }

  ngOnInit(): void {
  }
  addGroup() {
    this.groupService.createGroup(this.newGroup).subscribe(data => {
      console.log(data)
    })
  }
  
  

}