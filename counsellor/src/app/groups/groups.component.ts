import { Component, OnInit } from '@angular/core';
import { Groups } from '../groups';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  newGroup = new Groups("","","");
  constructor() { }

  ngOnInit(): void {
  }
  addGroup(): void {}

}
