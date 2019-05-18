import {RestaurantCuisineDao} from "../dao/RestaurantCuisine-dao";

export class RestaurantCuisineController {

  static getAll(req, res){
    RestaurantCuisineDao.getAll()
      .then(restaurants => res.status(200).json(restaurants))
      .catch(error => res.status(400).json(error));
  }

  static create(req, res){
    let _body = req.body
    console.log("controller in resCus")
    RestaurantCuisineDao.create(_body)
      .then(restaurants => res.status(200).json(restaurants))
      .catch(error => res.status(400).json(error));
  }
}
