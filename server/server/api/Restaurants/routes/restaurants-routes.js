
import {restaurantsController} from '../controllers/restaurants-controller';

export class restaurantsRoutes {
  static init(router) {
    router.route('/restaurants')
      .get(restaurantsController.getAll)
      .post(restaurantsController.createNew);

    router.route('/restaurants/:id')
      .get(restaurantsController.getById)
      .delete(restaurantsController.delete)
      .put(restaurantsController.update)


  }
}
