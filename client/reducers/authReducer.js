import * as types from '../actions/actionTypes';

const initialState = {
  loggedIn: false,
  showSignup: false,
  err: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    case types.POST_LOGIN_SUCCESS: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    case types.POST_LOGIN_FAILURE: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    case types.POST_SIGNUP_REQUEST: {
      return {
        ...state,
      };
    }
    case types.POST_SIGNUP_SUCCESS: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    case types.POST_SIGNUP_FAILURE: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
