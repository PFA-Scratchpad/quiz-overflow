import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools());

export default store;