import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
console.log(reducers)
const store = createStore(reducers, composeWithDevTools());

export default store;