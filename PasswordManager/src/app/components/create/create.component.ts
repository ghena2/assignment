import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from 'src/app/app.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup = new FormGroup({});
  
  user:User = {app:'',category:'',password:'',userName:'',id:0};

  constructor(private appServiceService:AppServiceService,
    private route:Router,
    ){}

  ngOnInit(): void {
    this.createForm = new FormGroup({
      userName:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
      app:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required])
    })
  }

  submit(){

    if(!this.createForm.valid) return;
    this.appServiceService.create(this.user);
    this.route.navigate(['']);

  }

  
}
