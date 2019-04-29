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

}
