import { cuisineController } from "../controllers/cuisine-controller"

export class cuisineRoutes {
  static init(router) {
    console.log("router")

    router.route('/cuisine')
      .get(cuisineController.getAll)
      .post(cuisineController.create)
  }
}
