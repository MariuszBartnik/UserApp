import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlService {
  currentComponent: string = "main";
  private componentObservable = new Subject<string>();

  constructor() {}

  setCurrentComponent(component){
    this.currentComponent = component;
    this.componentObservable.next(this.currentComponent)
  }
  getCurrentComponent():Observable<string>{
    return this.componentObservable.asObservable();
  }
}
