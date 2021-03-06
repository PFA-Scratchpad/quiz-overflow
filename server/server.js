const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/', (req, res) => {
  //get request to login/ signup page
  return res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});

app.post('/signup', userController.createUser, (req, res) => {
  // on failed signup, send boolean false
  if (res.locals.alreadyExists)
    return res.status(200).json('Username already taken!');
  // on successful signup, send boolean true
  res.status(200).json('New user added!');
});

app.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    if (!res.locals.loggedIn)
      return res.status(200).json('Incorrect username/password');
    res.status(200).json(res.locals.userRecord);
  }
);

app.get('/quizoverflow', (req, res) => {
  //dummy function, placeholder for information to be sent back to client
  res.status(200);
  res.send();
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.listen(3000);
console.log('Server listening on port 3000');
