import { User } from "./user";
import { CartProduct } from "./cartProduct";
import { car } from "./car";
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Cart{
  static genId : number = 1
  id : number 
  user !:User
  total=0;
  selections:CartProduct[]=[];
  constructor(){
    //this.id=Cart.genId++;
    this.id = Math.floor(Math.random() * (100000 - 1 + 1) + 1);
  }
  getItems(){
    return this.selections;
  }
  add(Car: car): void {
    this.total+=Car.price;
    let found : boolean = false
    for(let item of this.selections){
      if(item.product==Car){
        item.quantity++;
        found = true
        break;
      }
    }
    if(!found)
      this.selections.push(new CartProduct(Car));
  }
  
  remove(product: car): void {
    this.total -= product.price;
    for(let index=0;index<this.selections.length;index++){
      if(this.selections[index].product==product){
        this.selections[index].quantity--;
        if(this.selections[index].quantity==0){
          this.selections.splice(index,1)
        }
        break;
      }
    }
  }
  getTotal(){
    return this.total
  }
}