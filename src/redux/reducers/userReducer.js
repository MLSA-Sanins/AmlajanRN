import {
  FETCHING_INITIAL_USER,
  INITIAL_USER_FETCHED,
  AUTH_FAILED,
  USER_NOT_REGISTERED,
  USER_REGISTERED,
  REGISTERING_NEW_USER,
  NEW_USER_REGISTERED,
  LOGOUT_USER,
  LOADING_ADDRESS,
  ADDRESS_LOADED,
  UPDATING_ADDRESS,
  ADDRESS_UPDATED,
} from '../constants';
const initialState = {
  isLoading: null,
  currentUser: null,
  isRegisteredUser: null,
  loadingLocation: null,
  location: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING_NEW_USER:
    case FETCHING_INITIAL_USER:
      return {...state, isLoading: true};
    case INITIAL_USER_FETCHED:
      return {...state, currentUser: action.payload, isLoading: false};
    case AUTH_FAILED:
      return {...state, isLoading: false};
    case LOADING_ADDRESS:
      return {...state, loadingLocation: true};
    case ADDRESS_LOADED:
      return {...state, loadingLocation: false, location: action.payload};
    case USER_REGISTERED:
      return {
        ...state,
        isRegisteredUser: true,
        currentUser: {...state.currentUser},
      };
    case NEW_USER_REGISTERED:
      return {
        ...state,
        isLoading: false,
        isRegisteredUser: true,
        currentUser: {...state.currentUser, ...action.payload},
      };
    case ADDRESS_UPDATED:
      return {...state, location: {...state.location, address: action.payload}};
    case LOGOUT_USER:
      return {...state, currentUser: null, isRegisteredUser: null};
    case USER_NOT_REGISTERED:
      return {...state, isRegisteredUser: false};
    default:
      return state;
  }
};
