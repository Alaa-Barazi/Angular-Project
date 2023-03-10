import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginregister',
  templateUrl: './loginregister.component.html',
  styleUrls: ['./loginregister.component.css']
})
export class LoginregisterComponent implements OnInit {

  constructor(private router:Router) { }
  img:string='';
  ngOnInit(): void {
  }
  backHome(){
    this.router.navigate(['home']);
  }
}
