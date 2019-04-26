import { environment } from './../../../environments/environment';
export const POSTUSER = 'POSTUSER';
export const USER = 'USER'

export const UserEndPoint = (type:string,params:any)=> {
 console.log("---------userEndpoint")
  switch (type) {

    case POSTUSER:
      return environment.API_ROOT + 'user/';

    case USER:
      return environment.API_ROOT + 'user/';


  }
}
