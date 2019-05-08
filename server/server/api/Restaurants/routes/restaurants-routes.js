/*import {restaurantsController} from "../controllers/restaurants-controller";

export class restaurantsRoutes {
  static init(router) {
    router.route('/restaurants')
      .get(restaurantsController.getAll)
      .post(restaurantsController.createNew);

  }
}*/


import {restaurantsController} from '../controllers/restaurants-controller';

export class restaurantsRoutes {
  static init(router) {
    router.route('/restaurants')
      .get(restaurantsController.getAll)
      .post(restaurantsController.createNew);

    router.route('/restaurants/:id')
      .delete(restaurantsController.delete)


  }
}
