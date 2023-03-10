import { car } from "./car";

export class CartProduct{
    static genId : number = 1
    id : number
    product:car;
    quantity:number=1;
    constructor(product:car){
        this.id = CartProduct.genId++;
        this.product=product;
        this.quantity=1;
    }
   
    
   
  
}