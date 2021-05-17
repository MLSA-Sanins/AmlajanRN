import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const middlewares = [thunk];

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['user', 'error'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
