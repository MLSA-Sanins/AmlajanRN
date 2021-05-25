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
import {checkUserExistence, registerUser} from '../../api/azureApi';
import {getEveryProvider} from './providerActions';
import {fecthLocationAndAddress} from './locationActions';

//get data from our data base
export const checkIfUserExists = uid => async (dispatch, getState) => {
  try {
    // console.log(...user);
    const response = await checkUserExistence(uid);
    if (
      getState().user.currentUser.location.latitude === null &&
      getState().user.loadingLocation === null
    ) {
      await dispatch(fecthLocationAndAddress());
    }
    dispatch({type: USER_REGISTERED, payload: response.data.Provider});
    await dispatch(getEveryProvider());
    dispatch(clearErrors());
    return;
  } catch (e) {
    dispatch({type: USER_NOT_REGISTERED});
    dispatch(getErrors(e));
  }
};

//get data from firebase
export const getInitialUserData = user => async dispatch => {
  const userData = await JSON.parse(JSON.stringify(user));
  try {
    if (user) {
      await dispatch(checkIfUserExists(user.uid));
      dispatch(clearErrors());
    }
    dispatch({type: INITIAL_USER_FETCHED, payload: userData});
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
      const response = await registerUser(role, data);
      if (
        getState().user.currentUser.location.latitude === null &&
        getState().user.loadingLocation === null
      ) {
        await dispatch(fecthLocationAndAddress());
      }
      dispatch({type: NEW_USER_REGISTERED, payload: response.data.Response});
      await dispatch(getEveryProvider());
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
    console.log(e);
    dispatch({type: LOGOUT_USER});
  }
};
