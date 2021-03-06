/*****************************************************************************
 * ZNK quizz API
 *****************************************************************************/

/*
 * Import Vendors
 */
import express from 'express';
import { Server as httpServer } from 'http';
import bodyParser from 'body-parser';
import path from 'path';

import { SERVER } from './configs/serverConfig';

import quizzRoutes from './routes/quizzRoutes';
import resultsRoutes from './routes/resultsRoutes';

import errorHandler from './utils/errorsUtils';

const app = express();
const http = httpServer(app);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// API
app.use('/quizz', quizzRoutes);
app.use('/results', resultsRoutes);

// Error Handler
app.use(errorHandler);

// Redirect other page
app.use((req, res) => {
  console.error(`Router error: Unknow route (${req.url})`);
  return res.end();
});

/*
 * Go, go, go :D
 */
http.listen(SERVER.APP_PORT, () => {
  console.log(`Server started on port ${SERVER.APP_PORT}`);
});
