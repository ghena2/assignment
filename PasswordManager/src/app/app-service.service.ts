import { Injectable } from '@angular/core';
import { User } from './app.model';
 
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  users:User[] = [];
  counter:number = 0;

  constructor() { }

  create(user:User){
    this.counter = parseInt(localStorage.getItem("counter") || "0");
    user.id = this.counter++;
    this.users = JSON.parse(localStorage.getItem("users") || "[]");
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));
    localStorage.setItem("counter", JSON.stringify(this.counter));
  }

  getAll(){
    this.users = JSON.parse(localStorage.getItem("users") || "[]");

    return this.users;
  }

  get(userId:number){
    this.users = JSON.parse(localStorage.getItem("users") || "[]");

    return this.users.filter(x=>x.id == userId)[0];
  }

  edit(user:User){
    this.users = JSON.parse(localStorage.getItem("users") || "[]");    
    this.users = this.users.filter(x=>x.id != user.id);
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));
  }

  delete(userId:number){
    this.users = JSON.parse(localStorage.getItem("users") || "[]");    
    this.users = this.users.filter(x=>x.id != userId);
    localStorage.setItem("users", JSON.stringify(this.users));
  }
}

