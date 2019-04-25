import models from '../../../models';
import Promise from 'bluebird';

export class usersDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.Users.findAndCountAll()
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static createNew(_body) {
    return new Promise((resolve, reject) => {
      models.Users.create({
        firstName: _body.firstName,
        lastName: _body.lastName,
        phone: _body.phone,
        email: _body.email,
        address: _body.address,
        role: _body.role,
        password: _body.password
      }).then(user => {
        resolve(user);
      })
        .catch(error => reject(error));
    });
  }

  static delete(paramet) {
    return new Promise((resolve, reject) => {
      models.Users.destroy({where: {id: paramet}})
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
