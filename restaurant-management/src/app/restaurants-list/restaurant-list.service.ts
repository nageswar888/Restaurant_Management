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
    return this.queryApi.doGet('RESTAURANTS',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  getRes(params):Observable<any>{
    console.log(params)
    return this.queryApi.doGet('RESTAURANTBYID',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  postRestaurants(params):Observable<any>{
        //console.log("------service",params)
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

  updateRestaurant(params,id):Observable<any>{
    return this.queryApi.doPut('RESTAURANTBYID', {params,id})
      .pipe(
        catchError(err => of([err]))
      );
  }

  getCuisine():Observable<any>{
    let params
    return this.queryApi.doGet('GETCUISINE', params)
      .pipe(
        catchError(err => of([err]))
      )
  }

  addRestCuisine(params):Observable<any>{
    return this.queryApi.doPost('POSTRESCUISINE', params)
      .pipe(
        catchError(err => of([err]))
      )
  }
}
