import * as types from '../actions/actionTypes';

const initialState = {
  loggedIn: true,
};

export const loginReducer = (state = initialState, action) => {
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
    default: {
      return state;
    }
  }
};
