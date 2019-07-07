import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @Output() newUser = new EventEmitter<any>();

  submitted: boolean = false;

  name:string;
  email:string;
  city:string;
  street:string;
  phone:string;
  website: string;
  company: string;

  constructor(private userService:UserService, private controlService:ControlService ) { }

  
  ngOnInit() {

  }

  addUser(){
    const user = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      website: this.website,
      company: {
        name: this.company
      },
      address: {
        city: this.city,
        street: this.street
      }
    }

    this.userService.postUser(user)
      .subscribe(newUser => {
        this.newUser.emit(newUser);
        this.submitted = true;
    })
  }

  mainPage(){
    this.controlService.setCurrentComponent('main')
  }

}
