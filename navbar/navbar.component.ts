import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url = self ? this.router.url : 'home';
  menuType: string = 'default';
  email: any;
  img: string = 'https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png ';
  loggedUser: any;
  constructor(private user: UserService, private router: Router) { }
  islogin:boolean=false;
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url && localStorage.getItem('currentUser')){
        this.islogin=true;
      }
    })
    this.router.events.subscribe((val: any) => {
      //this.router.onSameUrlNavigation = 'reload'
      if (val.url) {
        //this.router.onSameUrlNavigation = 'reload'
        if (localStorage.getItem('currentUser') && val.url.includes('profile/userprofile')) {
          this.islogin=true;
          let store = localStorage.getItem('currentUser');
          let data = store && JSON.parse(store)[0];
          this.email = data.email;
          this.loggedUser = this.user.showUser(this.email);
          this.img = this.loggedUser.img;
          this.menuType = 'LoggedIn';
          
        }
        else {
          this.menuType = 'default';
          //this.islogin=false;
          //this.img='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp';

               
        }

      }
      
    });
    
  }
  getEmail() {
    return this.email;
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.islogin=false;
   this.img='https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png';

  }



}
