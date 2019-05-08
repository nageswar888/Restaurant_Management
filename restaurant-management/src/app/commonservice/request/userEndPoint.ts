import { environment } from './../../../environments/environment';
export const USER = 'USER';
export const RESTAURANTS = 'RESTAURANTS';
export const USERBYEMAIL = 'USERBYEMAIL';
export const RESTAURANTDEL = 'RESTAURANTDEL';

export const UserEndPoint = (type:string,params:any)=> {
 //console.log("---------userEndpoint")
  switch (type) {

    case USER:
      return environment.API_ROOT + 'user/';

    case RESTAURANTS:
      return environment.API_ROOT + 'restaurants/';

    case RESTAURANTDEL:
      return environment.API_ROOT + 'restaurants/'+params;

    case USERBYEMAIL:
      return environment.API_ROOT + 'user/'+ params;


  }
}
