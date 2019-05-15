import Promise from 'bluebird';
import models from '../../../models';

export class RestaurantCuisineDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.RestaurantCuisine.findAndCountAll()
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static create(_body) {
    console.log("----------dao method", _body)
    return new Promise((resolve, reject) => {
      models.RestaurantCuisine.create({
        RId: _body.RId,
        CId: _body.CId
      }).then(user => {
        resolve(user);
      })
        .catch(error => reject(error));
    });
  }
}
