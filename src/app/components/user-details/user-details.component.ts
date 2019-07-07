import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  currentUser:User;
  currentDetail:string = "email";

  constructor(private userService:UserService, private controlService:ControlService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser()
  }

  getImage(){
    return `https://source.unsplash.com/random/250x250/?sig=${this.currentUser.id}`    
  }

  setCurrentDetail(detail){
    this.currentDetail = detail;
  }

  editUser(){
    this.controlService.setCurrentComponent('editUser');
  }

  deleteUser(){
    this.controlService.setCurrentComponent('deleteUser')
  }

}
