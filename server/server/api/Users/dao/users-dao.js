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



  /////////////////////////////////////////////////


  static getnag() {
    return new Promise((resolve, reject) => {
      models.nag.findAndCountAll()
        .then(users => {
          resolve(users);
        })
        .catch(error => {
          reject(error);
        });
    });
  }


  static postnag(_body) {
    console.log("----------dao method",_body)
    return new Promise((resolve, reject) => {
      models.nag.create({
      username: _body.username
      }).then(user => {
        resolve(user);
      })
        .catch(error => reject(error));
    });
  }
}
