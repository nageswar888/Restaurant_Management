import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {RestaurantsComponent} from "./restaurants/restaurants.component";
import {RestaurantsListComponent} from "./restaurants-list/restaurants-list.component";
import {ViewProfileComponent} from "./view-profile/view-profile.component";
import {ViewUserComponent} from "./view-user/view-user.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'restaurants-list', component: RestaurantsListComponent},
  { path: 'view-profile', component: ViewProfileComponent},
  { path: 'view-user', component: ViewUserComponent}
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
