import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,  Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  

  constructor(private user:UserService,private actRoute: ActivatedRoute) { }
  fullname:string='';
  email:string='';
  date:string='';
  gender:string='';
  img:string='';
  CurrentUser:any;
 
  ngOnInit(): void {
    this.email = this.actRoute.snapshot.params["mail"];
    this.CurrentUser=this.user.showUser(this.email);
    this.fullname=this.CurrentUser.fullname;
    this.email=this.CurrentUser.email;
    this.date=this.CurrentUser.birthdate;
    this.gender=this.CurrentUser.gender;
    this.img=this.CurrentUser.img;
    this.user.setImg(this.img);
    localStorage.setItem('currentUser', JSON.stringify([{ email:this.email }]));
  }
}
