import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { car } from './car';
import { Cart } from './cart';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseURL : string = 'http://localhost:3000/';
  headers = {'content-type':'application/json'};
  mycart=new Cart();
  constructor(private router: Router,private http:HttpClient) {}
  UpdateUser(user : User){
    this.mycart.user = user
  }
  getItems(){
    return this.mycart.getItems();
  }
  AddtoCart(Car:car){
    this.mycart.add(Car);
  }
  RemoveFromCart(Car:car){
    this.mycart.remove(Car);
  }
  getTotal(){
    return this.mycart.getTotal()
  }
 
  Pay(){
    let body = JSON.stringify(this.mycart);
    return this.http.post(this.baseURL + 'Cart/',body,{headers:this.headers});
    
  }
  clear(){
    let user = this.mycart.user
    this.mycart = new Cart()
    this.mycart.user = user
  }
  hasUser(){
    return this.mycart.user != null
  }
}
