import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CatalogComponent } from './Catalog/catalog.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { LoginregisterComponent } from './loginregister/loginregister.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';



const routes: Routes = [
{path:'',pathMatch:'full',redirectTo:'home'},
{path:'nav/:mail',component:NavbarComponent},
{path:'login',component:LoginFormComponent},

{path:'register',component:RegisterComponent},
{path:'profile',component:LoginregisterComponent,
children:[
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:'userprofile/:mail',component:UserProfileComponent},
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterComponent}
]},
{
  path:'home',component:HomeComponent
},
{path:'catalog',component:CatalogComponent},
{path:'cart',component:CartComponent},

{
  path:'about',component:AboutComponent
},
{path: '**',component:PageNotFoundComponent}
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
