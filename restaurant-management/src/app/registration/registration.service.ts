import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {QueryApi} from "../commonservice/request/QueryApi";
import { catchError } from 'rxjs/operators'
import { of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private queryApi: QueryApi) { }

  PostUser(params):Observable<any>{
    console.log("object in service-----",params)
    return this.queryApi.doPost('USER',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  getting_user():Observable<any>{
    let params
    return this.queryApi.doGet('USER',params)
      .pipe(
        catchError(err => of([err]))
      );
  }

  get_user_email(params):Observable<any>{
    let nag
    return this.queryApi.doGet('USERBYEMAIL',params)
      .pipe(
        catchError(err => of([err]))
      );

  }


}
