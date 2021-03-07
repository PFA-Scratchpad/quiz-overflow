import { combineReducers } from 'redux';
import quizReducer from './quizReducer';
import signup from './signupReducer';
import login from './loginReducer';

const reducers = combineReducers({
  signup,
  login,
  quiz: quizReducer,
});

export default reducers;

