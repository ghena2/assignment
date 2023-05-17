import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { User } from 'src/app/app.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup = new FormGroup({});
  
  user:User = {app:'',category:'',password:'',userName:'',id:0};

  constructor(private appServiceService:AppServiceService,
    private route:Router,
    private activeRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('id'));
    this.user =  this.appServiceService.get(id);

    this.editForm = new FormGroup({
      id:new FormControl(this.user.id,[Validators.required]),
      userName:new FormControl(this.user.userName,[Validators.required]),
      password:new FormControl(this.user.password,[Validators.required]),
      app:new FormControl(this.user.app,[Validators.required]),
      category:new FormControl(this.user.category,[Validators.required])
    })
  }

  submit(){
    if(!this.editForm.valid) return;
    this.appServiceService.edit(this.user);
    this.route.navigate(['']);
  }

}
