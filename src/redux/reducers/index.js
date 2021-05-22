import {combineReducers} from 'redux';

import userReducer from './userReducer';
import errorReducers from './errorReducers';
import themeReducers from './themeReducers';
import providerReducers from './providerReducers';

export default combineReducers({
  user: userReducer,
  error: errorReducers,
  themes: themeReducers,
  providers: providerReducers,
});
