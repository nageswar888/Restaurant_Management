import Promise from 'bluebird';
import models from '../../../models';

export class cuisineDao {
  static getAll() {
    console.log("dao")
    return new Promise((resolve, reject) => {
      models.Cuisines.findAll({attributes:['id','Type']})
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
