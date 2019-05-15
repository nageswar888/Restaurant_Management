import {RestaurantCuisineController } from "../controllers/RestaurantCuisine-controller"

export class RestaurantCuisineRoutes {
  static init(router){
    router.route('/RestaurantCuisine')
      .get(RestaurantCuisineController.getAll)
      .post(RestaurantCuisineController.create)
  }
}
