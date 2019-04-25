import {userRoutes} from "../api/Users/routes/users-routes";


export default class Routes {
   static init(app, router) {
     userRoutes.init(router);


     app.use("/", router);
   }
}
