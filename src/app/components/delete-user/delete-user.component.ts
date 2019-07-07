import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  @Output() deletedUser = new EventEmitter<User>();
  currentUser: User;
  submitted:boolean = false;

  constructor(private userService: UserService, private controlService:ControlService) { }

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser()
  }

  getImage(){
    return `https://source.unsplash.com/random/250x250/?sig=${this.currentUser.id}`    
  }

  delete(){
    this.userService.deleteUser(this.currentUser).subscribe(() => {
      this.deletedUser.emit(this.currentUser)
      this.submitted = true;
    })
  }

  cancel(){
    this.controlService.setCurrentComponent('main');
  }

  mainPage(){
    this.controlService.setCurrentComponent('main')
  }

}
