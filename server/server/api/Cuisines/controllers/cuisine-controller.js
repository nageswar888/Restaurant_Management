import { cuisineDao } from "../dao/cuisine-dao"

export class cuisineController {

  static getAll(req, res) {
    console.log("controller")
    cuisineDao.getAll()
      .then(uses => res.status(200).json(uses))
      .catch(error => res.status(400).json(error));
  }

  static create(req, res) {
    let _body = req.body;
    cuisineDao.create(_body)
      .then(uses => res.status(200).json(uses))
      .catch(error => res.status(400).json(error));
  }

}
