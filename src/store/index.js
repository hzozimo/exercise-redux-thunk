// Importe o método applyMiddleware
import { createStore, applyMiddleware  } from 'redux';
// Importe o redux-thunk
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// Aplique o middleware
const store = createStore(
  rootReducer, applyMiddleware(thunk)
);

export default store;
