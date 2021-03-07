import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_LOGIN_STARTED,
} from './actionTypes';

export const postLogin = ({ username: password }) => dispatch => {
  dispatch(postLoginStarted());
  fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/JSON' },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(data => data.json())
    .then(data => {
      if (data && data.loggedIn !== undefined) {
        dispatch(postLoginSuccess(data.loggedIn));
      }
    })
    .catch(data => {
      dispatch(postLoginFailure(data));
    });
};

const postLoginStarted = () => ({
  type: POST_LOGIN_STARTED,
});

const postLoginSuccess = loggedIn => ({
  type: POST_LOGIN_SUCCESS,
  payload: {
    loggedin,
  },
});

const postLoginFailure = err => ({
  type: POST_LOGIN_FAILURE,
  payload: {
    err,
  },
});
