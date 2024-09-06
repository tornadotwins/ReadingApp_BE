import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';

import authRoute from './routes/auth.route';
import bookRoute from './routes/book.route';
import bookmarkRoute from './routes/bookmark.route';

import dbConfig from './config/db.config';
import path from 'path';

// Connect DB.
mongoose
  .connect(dbConfig.url)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log(
      'Could not connect to the database. Exiting now...',
      err,
    );
    process.exit();
  });

// Initialize our express app
const app = express();
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE',
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/', express.static(path.join(__dirname, '/public')));

app.use('/auth', authRoute);
app.use('/books', bookRoute);
app.use('/bookmarks', bookmarkRoute);

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is up and running on ${port} port number`);
});
