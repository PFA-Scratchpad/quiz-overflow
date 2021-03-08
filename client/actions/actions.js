import * as types from './actionTypes';

export const getNewCard = () => dispatch => {
    dispatch({type: types.NEW_CARD_REQUEST})
    fetch('/quiz-overflow')
    .then(res => res.json())
    .then((card) => console.log('Card from db', card))
    .then(card => dispatch({
        type: types.NEW_CARD_RECEIVED,
        payload: card
    }));
};

export const correctChoice = (num) => ({
    type: types.CORRECT_CHOICE,
    payload: num,
})