import q from 'q';
import { Router as router } from 'express';

import uniqToken from '../utils/tokenUtils';

import * as resultsController from '../controllers/resultsController';

export default router()
  .get('/', (req, res, next) => {
    q()
      .then(() => resultsController.getAll())
      .then(data => res.send(data))
      .catch(err => next(err));
  })
  .post('/', uniqToken, (req, res, next) => {
    q()
      .then(() => resultsController.add(req.body))
      .then(() => res.sendStatus(204))
      .catch(err => next(err));
  });
