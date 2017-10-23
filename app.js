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

const APP_PORT = 3000;

const app = express();
const http = httpServer(app);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public')));

// API
import quizzRoutes from './routes/quizzRoutes';
app.use('/quizz', quizzRoutes);


// Redirect other page
app.use((req, res) => {
  console.error(`Router error: Unknow route (${req.url})`);
  return res.end();
});

/*
 * Go, go, go :D
 */
http.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
