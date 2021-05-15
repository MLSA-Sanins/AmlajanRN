import {SWITCH_THEME} from '../constants';

export const switchTheme = theme => dispatch => {
  try {
    dispatch({type: SWITCH_THEME, payload: theme});
  } catch (e) {
    console.log(e);
  }
};
