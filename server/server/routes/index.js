import {userRoutes} from "../api/Users/routes/users-routes";
import {restaurantsRoutes} from "../api/Restaurants/routes/restaurants-routes"
import {cuisineRoutes } from "../api/Cuisines/routes/cuisine-routes";
import {RestaurantCuisineRoutes } from "../api/RestaurantCuisine/routes/RestaurantCuisine-routes";

export default class Routes {
   static init(app, router) {
     userRoutes.init(router),
     restaurantsRoutes.init(router),
       cuisineRoutes.init(router)
     RestaurantCuisineRoutes.init(router)


     app.use("/", router);
   }
}
