import {usersController} from '../controllers/users-controller';

export class userRoutes {
  static init(router) {
    router.route('/users')
      .get(usersController.getAll)
      .post(usersController.createNew);

    router.route('/users/:id')
    .delete(usersController.delete)
  }
  }
