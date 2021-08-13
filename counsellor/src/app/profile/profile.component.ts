import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.model'
import { UserService } from '../shared/user.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: any;
  user_id: any;
  email: any;
  firstName: any;
  lastName: any;
  

  constructor(private userervice: UserService ,) {
   
  }

  ngOnInit(): void {

    this.username = localStorage.getItem('username')
    this.user_id = localStorage.getItem('user_id')

    // this.authService.getStatus().subscribe((res: any[]) => {
    //   this.patientsNames = res;
    //   console.log(this.username)
    //   console.log(this.patientsNames)
    //   this.newArray = this.patientsNames.filter(patienty => patienty.name === this.username)
    //   this.patientsStat = this.newArray.reverse();
    //   this.patientsStatus = this.patientsStat[0]
    //   console.log(this.patientsStat[0])
    // })
  }
 

}
