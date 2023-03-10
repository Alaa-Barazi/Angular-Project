import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { car } from '../car';
import { CartService } from '../cart.service';
import { CartProduct } from '../cartProduct';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:CartProduct[]=[];
  total:number=0;
  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {
    this.products=this.cartService.getItems();
    this.total=this.cartService.getTotal();
  }
  checkUser(){
    return this.cartService.hasUser()
  }
  removeFromCart(product:car){
      this.cartService.RemoveFromCart(product);
    }
  addToCart(item:car){
      this.cartService.AddtoCart(item);
  }
 
   makepay(){
    this.cartService.Pay().subscribe()
    this.clearAdd();
   }
    clearAdd(): void {
      this.products= [];
      this.total=0;
      this.cartService.clear()
    }
    getTotal(){
      return this.cartService.getTotal()
    } 
  }
  


