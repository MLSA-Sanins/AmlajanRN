import {SWITCH_THEME} from '../constants';
import {lightTheme, darkTheme} from '../../theme/properTheme';
import {Appearance} from 'react-native-appearance';

//import {REHYDRATE} from 'redux-persist';
const whichTheme = Appearance.getColorScheme();

const initialState = {
  theme: whichTheme === 'dark' ? darkTheme : lightTheme,
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
