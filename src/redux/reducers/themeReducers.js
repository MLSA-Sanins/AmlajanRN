import {SWITCH_THEME} from '../constants';
import { lightTheme } from '../../theme/properTheme';

const initialState = {
  theme: {...lightTheme},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      return {theme: action.payload};
    default:
      return state;
  }
};
