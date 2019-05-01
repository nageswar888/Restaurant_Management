import models from '../../../models';
import Promise from 'bluebird';

export class usersDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.users.findAndCountAll()
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static createNew(_body) {
    console.log("----------dao method",_body)
    return new Promise((resolve, reject) => {
      models.users.create({
        firstName:_body.firstName,
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
    console.log("////////////",paramet)
    return new Promise((resolve, reject) => {
      models.users.destroy({where: {id: paramet}})
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getByEmail(paramet) {
    console.log("////////////",paramet)
    return new Promise((resolve, reject) => {
      models.users.findAll({where: {email: paramet}})
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

}
