import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserEndPoint} from "./userEndPoint";

@Injectable()
export class QueryApi {
  constructor(private http: HttpClient) { }

  doGet(url: string,  params: any) {
    url = UserEndPoint(url,params);
    //console.log("-----------url in queryApi",url)
    return this.http.get(url, params);
  }

  doPost(url: any, params: any) {
    url = UserEndPoint(url, params);
    console.log("-----------url in QueryApi",url)
    console.log("-----------params in QueryApi",params)
    return this.http.post(url, params );
  }

  doDelete(url: any, params: any) {
    url = UserEndPoint(url, params)
    return this.http.delete(url, params)
  }

  doPut(url: any, params: any) {
    url = UserEndPoint(url,params.id)
    console.log("url --",url)
    console.log("par--",params)

    return this.http.put(url, params)
  }

}
