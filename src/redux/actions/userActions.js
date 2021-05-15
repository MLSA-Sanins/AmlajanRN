import {
  FETCHING_INITIAL_USER,
  INITIAL_USER_FETCHED,
  AUTH_FAILED,
  USER_NOT_REGISTERED,
  USER_REGISTERED,
  REGISTERING_NEW_USER,
  NEW_USER_REGISTERED,
  LOGOUT_USER,
} from '../constants';
import {getErrors, clearErrors} from './errorActions';
import {checkUserExistence, registerUser} from '../../api/herokuApi';

//get data from our data base
export const checkIfUserExists = uid => async dispatch => {
  try {
    const response = await checkUserExistence(uid);
    dispatch({type: USER_REGISTERED, payload: response.data.Provider._user});
    dispatch(clearErrors());
  } catch (e) {
    dispatch({type: USER_NOT_REGISTERED});
    dispatch(getErrors(e));
  }
};

//get data from firebase
export const getInitialUserData = user => async dispatch => {
  try {
    if (user) {
      await dispatch(checkIfUserExists(user.uid));
      dispatch(clearErrors());
    }
    dispatch({type: INITIAL_USER_FETCHED, payload: user});
  } catch (e) {
    //console.log(e);
    dispatch(getErrors(e));
    dispatch({type: AUTH_FAILED});
  }
};

//register user on our database
export const registerNewUser =
  (role, data, navigation) => async (dispatch, getState) => {
    try {
      dispatch({type: REGISTERING_NEW_USER});
      const response = await registerUser(role, {
        ...data,
        uid: getState().user.currentUser.uid,
      });
      dispatch({type: NEW_USER_REGISTERED, payload: response.data.Response});
      navigation.navigate('Main');
      dispatch(clearErrors());
    } catch (e) {
      dispatch(getErrors(e));
      console.log(e);
    }
  };

//logging out user
export const logoutUser = () => async dispatch => {
  try {
    dispatch({type: LOGOUT_USER});
    dispatch(clearErrors());
  } catch (e) {
    dispatch({type: LOGOUT_USER});
  }
};
