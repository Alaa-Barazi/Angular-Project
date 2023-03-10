import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  name1:string="Alaa Barazi";
  name2:string="Mohammad Hajouj";
  email1:string='Brazialaa@gmail.com';
  email2:string='hajouj@gmail.com';
  img1:string="https://i.pinimg.com/originals/c4/98/16/c49816986f5343f915ac90d3dc740674.jpg";
  img2:string="https://carboncostume.com/wordpress/wp-content/uploads/2021/06/gumball-awog-character.jpg";
  id1:string='324091370';
  id2:string='212103113';
  mode:string='dark';
  isBright:boolean=true;
  ngOnInit(): void {
  }
  change(){
    this.isBright=!this.isBright;
    if(this.isBright)
     this.mode="dark";
    else
     this.mode="bright";
  }
}
