import * as types from '../actions/actionTypes';

const initialState = {
  loggedIn: true,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_LOGIN_REQUEST: {
      return {
        ...state,
      };
    }
    case types.POST_LOGIN_SUCCESS: {
      return {
        ...state,
        signedIn: action.payload,
      };
    }
    case types.POST_LOGIN_FAILURE: {
      return {
        ...state,
        signedIn: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
