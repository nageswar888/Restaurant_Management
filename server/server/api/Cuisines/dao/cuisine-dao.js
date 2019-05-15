import Promise from 'bluebird';
import models from '../../../models';

export class cuisineDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Cuisines.findAndCountAll()
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
      models.Cuisines.create({
        Type: _body.Type,
      }).then(user => {
        resolve(user);
      })
        .catch(error => reject(error));
    });
  }
}
