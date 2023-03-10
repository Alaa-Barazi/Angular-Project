import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { ProductApiService } from 'src/ServiceApi/product-api.service';
import { car } from "./car";
@Injectable({ providedIn : 'root'})
export class CarService{
    baseURL : string = 'http://localhost:3000/';
  headers = {'content-type':'application/json'};
    constructor(private service:ProductApiService,private http:HttpClient){}
    cars:car[]=
    [  
];
refreshCars(){

    this.service.getProduct().subscribe((data)=>{
      this.cars=data;
    })
  }
    getCars(){
        this.refreshCars();
        this.http.get<any>(this.baseURL + 'PopularOnes').subscribe((data)=>{
            this.cars=data
          });
        return this.cars;
    }
    getPopularCars(){
        return this.cars;
    }
    getSedan(){
        this.http.get<any>(this.baseURL + 'Sedan').subscribe((data)=>{
            this.cars=data
          });
          return this.cars;
    }   
    getSuv(){   

        this.http.get<any>(this.baseURL + 'Suv').subscribe((data)=>{
            this.cars=data
          });
          return this.cars;
         
    }
    getHybridElectric(){
        this.http.get<any>(this.baseURL + 'HybridElectric').subscribe((data)=>{
            this.cars=data
          });
          return this.cars;
    }
    
}