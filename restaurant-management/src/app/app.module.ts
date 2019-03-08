import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule} from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { SearchComponent } from './search/search.component';

import { FilterPipeModule } from 'ngx-filter-pipe';
import { FormsModule} from "@angular/forms";
import {RatingModule} from "ngx-rating";
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { ViewUserComponent } from './view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RestaurantsComponent,
    SearchComponent,
    RestaurantsListComponent,
    ViewProfileComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RatingModule,
    FilterPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
