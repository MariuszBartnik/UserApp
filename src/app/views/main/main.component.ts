import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currentComponent:string ="main";
  users:User[];

  constructor(private userService:UserService, private controlService: ControlService) { }

  ngOnInit() {
    this.controlService.getCurrentComponent().subscribe(component => {
      this.currentComponent = component;
    })
    this.userService.getUsers().subscribe(data => this.users = data)
  }

  addNewUser(newUser){
    this.users.push(newUser)
  }

  editUser(editedUser){
      let index = this.users.findIndex(user => user.id === editedUser.id)    
      this.users[index] = editedUser;
  }

  deleteUser(deletedUser){
    this.users = this.users.filter(user => user.id !== deletedUser.id)
  }

}
