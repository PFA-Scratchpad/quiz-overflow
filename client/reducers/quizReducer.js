import * as types from '../actions/actionTypes';
/* initialState.card is a dummy value. Needs to be changed when backend connected */
const initialState = {
  card: { question: 'This will be a question',
          choices: [
            {id: 1, text: 'string', isCorrect: true},
            {id: 2, text: 'string', isCorrect: false},
            {id: 3, text: 'string', isCorrect: false},
            {id: 4, text: 'string', isCorrect: false}
            ],
          answer: 0,
        },
  cardsThisSession: 1,
  correctAnswers: 0,
};
const quizReducer = (state = initialState, action) => {

    switch(action.type){
        case types.CORRECT_CHOICE: {
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1,
            }
        }
        case types.WRONG_CHOICE {
            return {
                ...state,
            }
        }
        default:{
            return state
        }
    }

};

export default quizReducer;