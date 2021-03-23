import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {InfocardsComponent} from "./components/infocards/infocards.component";
import {RestaurantViewComponent} from "./components/restaurant-view/restaurant-view.component";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";

import {KategoriComponent} from "./pages/kategori/kategori.component";

import{NavbarComponent}  from "./components/navbar/navbar.component"
import {RestauranterComponent} from "./pages/kategori/restauranter/restauranter.component";
import {RegistreringComponent} from "./pages/kategori/registrering/registrering.component";



import { LoginComponent } from './pages/login/login.component';
import {UserAuthComponent} from "./components/user-auth/user-auth.component"

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'inforcards',
    component: InfocardsComponent
  },
  {
    path:'restaurantView',
    component: RestaurantViewComponent
  },

  {
    path: 'kategori', component: KategoriComponent
  },

  {
    path: 'restauranter',
    component: RestauranterComponent
  },

  {
    path: 'registrering',
    component: RegistreringComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}), FormsModule, RatingModule, MatCardModule, MatIconModule],
  declarations: [
    RestaurantViewComponent
  ],


  exports: [RouterModule, RestaurantViewComponent]
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"",
    component:UserAuthComponent
  }

  
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'}), FormsModule, RatingModule, MatCardModule, MatIconModule],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
export const requestComponent = [HomeComponent,InfocardsComponent,RestaurantViewComponent,NavbarComponent,LoginComponent,UserAuthComponent]
