import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerform!:FormGroup ;
  msg:string='';
  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  PassValidator(){
    if(this.registerform.controls['pass'].value==this.registerform.controls['passrp'].value){
      return true;
    }
    else{
      return false;
    }
  }
  passwordMatchValidator(control: FormControl) {
    const password = control.root.get('pass');
    return password && control.value !== password.value ? { passwordMismatch: true } : null;
  }
  createRegisterForm(){
    this.registerform = new FormGroup({
      name : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
      pass: new FormControl('',[Validators.required,Validators.minLength(8)]),
      gender:new FormControl('',[Validators.required]),
      birthdate:new FormControl('',[Validators.required]),
      fullname: new FormControl('',[Validators.required]),
      passrp: new FormControl('',[Validators.required,Validators.minLength(8),this.passwordMatchValidator])
     
      }
     
    )
   
  }
 
 
  onSubmit(){
    let mail=this.registerform?.value.email;
    if(!this.service.isExists(mail)){
      let name= this.registerform?.value.name;
      let pass = this.registerform?.value.pass;
      let passagain = this.registerform?.value.passrp;
      let birth= this.registerform?.value.birthdate;
      let full= this.registerform?.value.fullname;
      let gend=this.registerform?.value.gender;
      if(this.registerform?.value.gender=="male"){
        gend="male";
      }
      if(passagain == pass){
        this.service.addUser(name,mail,pass,full,birth,gend);
        this.service.refreshUsers()
        this.router.navigate(['../login']);
      }
      else{
        alert("Passwords are different");
      }
    }
    else{
      alert("User exists");
    }
  }
}
