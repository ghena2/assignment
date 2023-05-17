import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from 'src/app/app.model';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.scss']
})
export class PasswordListComponent implements OnInit {
  
  users:User[] = [];

  constructor(public appServiceService:AppServiceService){

  }

  ngOnInit(): void {
    this.users =  this.appServiceService.getAll();
  }

  delete(id:number){
    this.appServiceService.delete(id);
    this.users =  this.appServiceService.getAll();
  }

}
