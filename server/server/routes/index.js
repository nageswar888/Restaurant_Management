import {userRoutes} from "../api/Users/routes/users-routes";
import {restaurantsRoutes} from "../api/Restaurants/routes/restaurants-routes"

export default class Routes {
   static init(app, router) {
     userRoutes.init(router),
     restaurantsRoutes.init(router)


     app.use("/", router);
   }
}
