import * as types from './actionTypes';

export const defaultAction = () => ({
    type: types.DEFAULT_ACTION,
    payload: null,
});

export const setCurrentChoice = () => ({
    type: types.SET_CURRENT_CHOICE,
    payload:null,
})

export const wrongChoice = () => ({
    type: types.WRONG_CHOICE,
    payload:null,
})

export const correctChoice = () => ({
    type: types.CORRECT_CHOICE,
    payload: null,
})