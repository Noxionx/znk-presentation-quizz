import q from 'q';
import { Router as router } from 'express';

import getData from '../controllers/quizzController';

export default router()
  .get('/', (req, res) => {
    res.send(getData());
  });
