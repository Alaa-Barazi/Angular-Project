import { Component, OnInit, Input } from '@angular/core';
import { CarService } from '../car.service';
import { car } from '../car';
import { ToyotacarService } from '../toyotacar.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myproducts:car[] =[];
  title = 'finalapp';
  typecar:string='';
  baseURL : string = 'http://localhost:3000/';
  headers = {'content-type':'application/json'};
  constructor(private carserv:CarService,private toyserv:ToyotacarService,private http:HttpClient){}
  
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
  ngOnInit(): void {
    this.http.get<any>(this.baseURL + 'PopularOnes').subscribe((data)=>{
      this.myproducts=data
    });
  
   
  }
}

