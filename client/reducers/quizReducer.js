import * as types from '../actions/actionTypes';
const initialState = {
  signedIn: false,
  card: {},
  count: 0,
};
const quizReducer = (state = initialState, action) => {

    switch(action.type){
        case types.DEFAULT_ACTION: {
            return {
                ...state,
                count: state.count + 1,
            }
        }
        default:{
            return state
        }
    }

};

export default quizReducer;