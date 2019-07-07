import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser:User;
  users:User[] = [];

  constructor(private http: HttpClient) { }

  setCurrentUser(user):void{
    this.currentUser = user;
  }

  getCurrentUser():User{
    return this.currentUser;
  }

  getUsers():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  
  postUser(newUser:any):Observable<User>{
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users', newUser);
  }

  editUser(editedUser:User):Observable<User>{
    return this.http.put<User>(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, editedUser);
  }

  deleteUser(user:User){
    return this.http.delete<User>(`https://jsonplaceholder.typicode.com/users/${user.id}`)
  }
}
