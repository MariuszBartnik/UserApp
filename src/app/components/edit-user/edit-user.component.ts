import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  @Output() editedUserComplete = new EventEmitter<User>()

  currentUser: User;
  submitted: boolean = false;

  name:string;
  email:string;
  city:string;
  street:string;
  phone:string;
  website: string;
  company: string;

  constructor(private userService:UserService, private controlService:ControlService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
    this.name = this.currentUser.name;
    this.email = this.currentUser.email;
    this.city = this.currentUser.address.city;
    this.street = this.currentUser.address.street;
    this.phone = this.currentUser.phone;
    this.website = this.currentUser.website;
    this.company = this.currentUser.company.name;
  }

  editUser(){
    const editedUser = {
      id: this.currentUser.id,
      name: this.name,
      email: this.email,
      phone: this.phone,
      website: this.website,
      address:{
        city: this.city,
        street: this.street
      },
      company: {
        name: this.company
      }
    }

    if(editedUser.id !== 11){
      this.userService.editUser(editedUser).subscribe((user) => {
        this.editedUserComplete.emit(user);
        this.submitted = true;
      })
    }else{
      this.editedUserComplete.emit(editedUser)
      this.submitted = true;
    }
  }

  mainPage(){
    this.controlService.setCurrentComponent('main')
  }
}
