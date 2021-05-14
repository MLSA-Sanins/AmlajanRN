import {GET_ERROR, CLEAR_ERROR} from '../constants';

//get errors
export const getErrors = error => dispatch => {
  dispatch({
    type: GET_ERROR,
    payload: error,
  });
};

//clear errors
export const clearErrors = () => dispatch => {
  dispatch({
    type: CLEAR_ERROR,
  });
};
