import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "../commonservice/request/QueryApi";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestaurantListService {

  constructor(private queryApi:QueryApi) { }

  getRestaurants():Observable<any>{
    let params
    console.log("this is service")
    return this.queryApi.doGet('RESTAURANTS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }
  postRestaurants(params):Observable<any>{
        console.log("------service",params)
    return this.queryApi.doPost('RESTAURANTS', params)
      .pipe(
         catchError(err => of([err]))
      );
  }

  deleteRestaurant(params):Observable<any>{
    console.log("------service",params)
    return this.queryApi.doDelete('RESTAURANTDEL', params)
      .pipe(
        catchError(err => of([err]))
      );
  }
}
