import * as types from '../actions/actionTypes';

const initialState = {
  loggedIn: true,
};
const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_SIGNUP_REQUEST: {
      return {
        ...state,
      };
    }
    case types.POST_SIGNUP_SUCCESS: {
      return {
        ...state,
        signedIn: action.payload,
      };
    }
    case types.POST_SIGNUP_FAILURE: {
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

export default signupReducer;
