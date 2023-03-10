import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.service.refreshUsers()
  }
  onSubmit(loginForm: NgForm) {
    let mail = loginForm.value.Email
    let pass = loginForm.value.Password
    if (this.service.login(mail, pass)) {
      localStorage.setItem('currentUser', JSON.stringify([{ email: mail }]));
      this.router.navigate(['profile/userprofile', mail]);
    }
    else
      alert("wrong user name or password");
  }

}
