import {combineReducers} from 'redux';
import userReducer from './userReducer';
import errorReducers from './errorReducers';

export default combineReducers({
  user: userReducer,
  error: errorReducers,
});
