import * as types from './actionTypes';

export const getNewCard = () => dispatch => {
    dispatch()
    fetch('/quiz-overflow')
    .then(res => res.json())
    .then((card) => console.log(card))
    .then(card => dispatch({
        type: types.GET_NEW_CARD,
        payload: card
    }));
};

export const correctChoice = (num) => ({
    type: types.CORRECT_CHOICE,
    payload: 1,
})