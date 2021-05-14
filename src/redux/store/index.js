import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const middlewares = [thunk];

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
