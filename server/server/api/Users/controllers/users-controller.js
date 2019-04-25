import {usersDao} from '../dao/users-dao';

export class usersController {
  static getAll(req, res) {
    usersDao.getAll()
      .then(uses => res.status(200).json(uses))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _body = req.body;
    usersDao.createNew(_body)
      .then(uses => res.status(200).json(uses))
      .catch(error => res.status(400).json(error));
  }

  static delete(req, res) {
    let paramet = req.params.id
    usersDao.delete(paramet)
      .then(uses => res.status(200).json(uses))
      .catch(error => res.status(400).json(error));
  }
}
