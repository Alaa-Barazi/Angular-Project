import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  typeofcar:string='';
  constructor() { }

  ngOnInit(): void {
  }
  
  setCar(type:string){
    this.typeofcar=type;
  }
}
