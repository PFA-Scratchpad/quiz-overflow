import * as types from '../actions/actionTypes';
/* initialState.card is a dummy value. Needs to be changed when backend connected */
const initialState = {
  signedIn: true,
  card: { question: 'This will be a question',
          choices: ['choice1', 'choice2', 'choice3', 'choice4'],
          answer: 0,
        },
  cardsThisSession: 1,
  correctAnswers: 0,
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