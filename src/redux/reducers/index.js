import {combineReducers} from 'redux';

import userReducer from './userReducer';
import errorReducers from './errorReducers';
import themeReducers from './themeReducers';

export default combineReducers({
  user: userReducer,
  error: errorReducers,
  themes: themeReducers,
});
