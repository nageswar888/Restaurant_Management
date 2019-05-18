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
    console.log("----------dao method",_body)
    //console.log("-->",_body.Cuisine[0].id)
    console.log("-->",_body.RId)
    //let RId = _body.Cuisine[0].id
   // let CId =  _body.id

    return new Promise((resolve, reject) => {
      for(let i of _body.Cuisine) {
        console.log("i is --", i.id)
        models.RestaurantCuisine.create({
          RId: _body.RId,
          CId: i.id
        })
          .then(user => {
            resolve(user);
          })
          .catch(error => reject(error));
      }
    });

  }
}
