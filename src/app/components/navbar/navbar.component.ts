import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private controlService:ControlService) { }

  ngOnInit() {
  }

  changeComponent(component){
    this.controlService.setCurrentComponent(component);
  }

}
