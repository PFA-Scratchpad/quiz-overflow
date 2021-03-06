import * as types from './actionTypes';


export const wrongChoice = () => ({
    type: types.WRONG_CHOICE,
    payload:null,
})

export const correctChoice = () => ({
    type: types.CORRECT_CHOICE,
    payload: null,
})