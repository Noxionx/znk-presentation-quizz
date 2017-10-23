import q from 'q';
import { Router as router } from 'express';

import * as quizzController from '../controllers/quizzController';

export default router()
  .get('/', (req, res) => {
    res.send(quizzController.getData());
  });
