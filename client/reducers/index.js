import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import authReducer from './authReducer';

const reducers = combineReducers({
  auth: authReducer,
  quiz: quizReducer,
});

export default reducers;
