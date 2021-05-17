import {SWITCH_THEME} from '../constants';
import {lightTheme} from '../../theme/properTheme';
//import {REHYDRATE} from 'redux-persist';

const initialState = {
  theme: {...lightTheme},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {theme: action.payload};
    // case REHYDRATE:
    //   return {...state, theme: action.payload.theme};
    default:
      return state;
  }
};
