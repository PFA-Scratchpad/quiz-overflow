import * as types from '../actions/actionTypes';
const initialState = {
  signedIn: false,
  card: {}
};
const quizReducer = (state = initialState, action) => {

    switch(action.type){
        default: {
            return state;
        }
    }
//   return { ...state };
};

export default quizReducer;