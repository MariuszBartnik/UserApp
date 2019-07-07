import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service'
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user

  constructor(private userService:UserService, private controlService: ControlService) { }

  ngOnInit() {
  }

  getImage(){
    return `https://source.unsplash.com/random/250x250/?sig=${this.user.id}`    
  }

  showDetails(){
    this.userService.setCurrentUser(this.user);
    // this.router.navigate(['/user-details'])
    this.controlService.setCurrentComponent('userDetails')    
  }

}
