import { Injectable } from '@angular/core';
import { User } from './user';
import { UserApiService } from 'src/ServiceApi/user-api.service';
import { CartService } from './cart.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  current:string='';
  img:string='';
  constructor(private service:UserApiService, private cartService:CartService){}
  
  users:User[]= []
  refreshUsers(){
    this.service.getUsers().subscribe((data)=>{
      this.users=data;
    })
  }
  getUsers(){
    this.service.getUsers().subscribe((data)=>{
      this.users=data;
    })
    return this.users;
  }
  isExists(mail:string){
    for (let user of this.users){
      if(mail==user.email)
      return true;
    }
    return false;
  }
  addUser(name:string,mail:string,pass:string,fullname:string,birthdate:string,gender:string){
    let user:User= new User(name,mail,pass,fullname,birthdate,gender);
    this.service.addUser(user).subscribe(()=>
      this.refreshUsers()
    )
  }

  login(mail:string, pass:string){
    this.refreshUsers();
    for(let user of this.users){
      if(user.email==mail && user.password==pass){
        this.cartService.UpdateUser(user)
        return true;
      }
    }
    return false;
  }
  showUser(email:any){
    for (let user of this.users){
      if(email==user.email){
        this.current=user.email;
         return new User(user.name,user.email,user.password,user.fullname,user.birthdate,user.gender);
      }
    }
    return null;
  }
  setImg(img:string){
    this.img=img;
  }
  getImg(){
    return this.img;
  }

  
}
