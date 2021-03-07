import {
  POST_SIGNUP_REQUEST,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILURE,
  POST_SIGNUP_STARTED,
} from './actionTypes';

export const postSignup = ({ username: password }) => dispatch => {
  dispatch(postSignupStarted());
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
        dispatch(postSignupSuccess(data.loggedIn));
      }
    })
    .catch(data => {
      dispatch(postSignupFailure(data));
    });
};

const postSignupStarted = () => ({
  type: POST_SIGNUP_STARTED,
});

const postSignupSuccess = loggedIn => ({
  type: POST_SIGNUP_SUCCESS,
  payload: {
    loggedin,
  },
});

const postSignupFailure = err => ({
  type: POST_SIGNUP_FAILURE,
  payload: {
    err,
  },
});
