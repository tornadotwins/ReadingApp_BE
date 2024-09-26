require ('dotenv/config');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const authRoute = require('./routes/auth.route');
const bookRoute = require('./routes/book.route');
const bookmarkRoute = require('./routes/bookmark.route');

const dbConfig = require('./config/db.config');
const path = require('path');

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
  if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript');
  }
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/', express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/auth', authRoute);
app.use('/books', bookRoute);
app.use('/bookmarks', bookmarkRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Server is up and running on ${port} port number`);
});
