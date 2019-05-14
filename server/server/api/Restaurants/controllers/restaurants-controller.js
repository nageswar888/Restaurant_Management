import {restaurantsDao} from '../dao/restaurants-dao';

export class restaurantsController {
  static getAll(req, res) {
    restaurantsDao.getAll()
      .then(restaurants => res.status(200).json(restaurants))
      .catch(error => res.status(400).json(error));
  }
  static createNew(req, res) {
    console.log("----------createNew method")
    let _body = req.body;
    //console.log("----------createNew method param",_body)
    restaurantsDao.createNew(_body)
      .then(restaurants => res.status(200).json(restaurants))
      .catch(error => res.status(400).json(error));
  }

  static delete(req, res) {
    let params = req.params.id
    //console.log("----------createNew method param",_body)
    restaurantsDao.delete(params)
      .then(restaurants => res.status(200).json(restaurants))
      .catch(error => res.status(400).json(error));
  }

  static getById(req, res) {
    let params = req.params.id
    //console.log("----------createNew method param",_body)
    restaurantsDao.getById(params)
      .then(restaurants => res.status(200).json(restaurants))
      .catch(error => res.status(400).json(error));
  }

  static update(req, res) {
    let _body = req.body.params; //because the input from front end is json object contains params and id
    let params = req.params.id   //hint: print req.body
    //console.log("---",_body,params)
    //console.log("----------createNew method param",_body)
    restaurantsDao.update(_body,params)
      .then(restaurants => res.status(200).json(restaurants))
      .catch(error => res.status(400).json(error));
  }

}
