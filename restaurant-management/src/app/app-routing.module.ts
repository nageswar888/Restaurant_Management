import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {RestaurantsListComponent} from "./restaurants-list/restaurants-list.component";
import {ViewProfileComponent} from "./view-profile/view-profile.component";
import {ViewUserComponent} from "./view-user/view-user.component";
import {EditRestaurantComponent} from "./edit-restaurant/edit-restaurant.component";
import {BookingComponent} from "./booking/booking.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'restaurants-list', component: RestaurantsListComponent},
  { path: 'view-profile', component: ViewProfileComponent},
  { path: 'view-user', component: ViewUserComponent},
  { path: 'edit-restaurant/:id', component: EditRestaurantComponent},
  { path: 'book/:id', component: BookingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
