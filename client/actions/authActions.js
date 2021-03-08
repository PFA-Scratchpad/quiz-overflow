import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAILURE,
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
  SHOW_SIGNUP,
} from './actionTypes';

export const postLogin = ({ username, password }) => dispatch => {
  dispatch(postLoginRequest());
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
        data.loginFailure = !data.loggedIn ? true : false;
        dispatch(postLoginSuccess(data));
      }
    })
    .catch(data => {
      dispatch(postLoginFailure(data));
    });
};

const postLoginRequest = () => ({
  type: POST_LOGIN_REQUEST,
});

const postLoginSuccess = payload => ({
  type: POST_LOGIN_SUCCESS,
  payload: {
    loggedIn: payload.loggedIn,
    message: payload.message,
    loginFailure: payload.loginFailure,
  },
});

const postLoginFailure = err => ({
  type: POST_LOGIN_FAILURE,
  payload: err,
});

export const postSignup = ({ username, password }) => dispatch => {
  dispatch(postSignupRequest());
  fetch('/signup', {
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
        data.loginFailure = !data.loggedIn ? true : false;
        dispatch(postSignupSuccess(data));
      }
    })
    .catch(data => {
      dispatch(postSignupFailure(data));
    });
};

const postSignupRequest = () => ({
  type: POST_SIGNUP_REQUEST,
});

const postSignupSuccess = payload => ({
  type: POST_SIGNUP_SUCCESS,
  payload: {
    loggedIn: payload.loggedIn,
    message: payload.message,
    loginFailure: payload.loginFailure,
  },
});

const postSignupFailure = err => ({
  type: POST_SIGNUP_FAILURE,
  payload: err,
});

export const showSignup = toggle => ({
  type: SHOW_SIGNUP,
  payload: toggle,
});
