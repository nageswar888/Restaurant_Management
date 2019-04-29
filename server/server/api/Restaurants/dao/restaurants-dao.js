import models from '../../../models';
import Promise from 'bluebird';

export class restaurantsDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Restaurants.findAndCountAll()
        .then(restaurants => {
          resolve(restaurants);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static createNew(_body) {
    console.log("----------dao method",_body)
    return new Promise((resolve, reject) => {
      models.Restaurants.create({
        Name:_body.Name,
        Location: _body.Location,
        phone: _body.phone,
        email: _body.email,
        type: _body.type,
        cuisine: _body.cuisine,
        image: _body.image
      }).then(restaurants => {
        resolve(restaurants);
      })
        .catch(error => reject(error));
    });
  }

  static delete(paramet) {
    console.log("////////////",paramet)
    return new Promise((resolve, reject) => {
      models.Restaurants.destroy({where: {id: paramet}})
        .then(restaurants => {
          resolve(restaurants);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

}
