import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {QueryApi} from "./commonservice/request/QueryApi";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor( private queryApi:QueryApi) { }

   PostUser(params):Observable<any>{
     console.log("object in service-----",params)
     return this.queryApi.doPost('POSTUSER',params)
       .pipe(
         catchError(err => of([err]))
       );
   }

  getting():Observable<any>{
    let params
    return this.queryApi.doGet('USER',params)
      .pipe(
        catchError(err => of([err]))
      );
  }


}
