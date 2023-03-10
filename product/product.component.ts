import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input} from '@angular/core';
import { car } from '../car';
import { CarService } from '../car.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  myproducts:car[] =[];
  title = 'finalapp';
  typecar:string='';
  baseURL : string = 'http://localhost:3000/';
  headers = {'content-type':'application/json'};
  productAdded: car | null | undefined;
  constructor(private carserv:CarService,private cart:CartService,private http:HttpClient){}
  
    
   
  ngOnInit(): void {
    this.carserv.refreshCars();
   //this.myproducts=this.carserv.getCars();
  
  }
  addtocart(product:any){
    this.cart.AddtoCart(product);
  }
  quantityOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];
  @Input() 
  set type(type: string) {
    this.typecar = type;
    if(this.type == ""){
      this.http.get<any>(this.baseURL + 'PopularOnes').subscribe((data)=>{
        this.myproducts=data
      });
    }
    else if(this.type == "Hybrid"){
      this.http.get<any>(this.baseURL + 'HybridElectric').subscribe((data)=>{
        this.myproducts=data
      });


    }
    else if(this.type == "Suv"){
      this.http.get<any>(this.baseURL + 'Suv').subscribe((data)=>{
        this.myproducts=data
      });
    }
    else if(this.type == "Sedan"){
    
      this.http.get<any>(this.baseURL + 'Sedan').subscribe((data)=>{
        this.myproducts=data
      });

    }
    else {
     this.http.get<any>(this.baseURL + 'PopularOnes').subscribe((data)=>{
        this.myproducts=data
      });
    
    }
  }
  get type(): string {
    return this.typecar;
  }
  addToCart(product: car, quantity: number): void {
    this.cart.AddtoCart(product);
    this.productAdded = product;
  }
 

  

   
 
  

}
