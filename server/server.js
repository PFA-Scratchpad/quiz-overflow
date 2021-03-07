const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  //get request to login/ signup page
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.post(
  '/signup',
  userController.createUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    // on failed signup, send boolean false - to update
    if (res.locals.alreadyExists)
      return res.status(200).json('Username already taken!');
    // on successful signup, send boolean true - to update
    res.status(200).json('New user added!');
  }
);

app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    if (!res.locals.loggedIn)
      // on failed sign in, send boolean false- to update
      return res.status(200).json('Incorrect username/password');
    // on successful sign in, send boolean true - to update
    res.status(200).json('Log in successful');
  }
);

// to send quiz data after isLoggedIn after merging with Dwayne's middleware
app.get('/quizoverflow', sessionController.isLoggedIn, (req, res) => {
  console.log('session cookieSessionMatch', res.locals.cookieSessionMatch);
  if (!res.locals.cookieSessionMatch) res.status(200).json('Invalid session');
  res.status(200).json(res.locals);
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(3000);
console.log('Server listening on port 3000');
