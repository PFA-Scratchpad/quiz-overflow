import * as types from './actionTypes';

export const getNewCard = () => ({
    type: types.GET_NEW_CARD,
    payload: null,
})

export const correctChoice = (num) => ({
    type: types.CORRECT_CHOICE,
    payload: 1,
})