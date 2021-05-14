import {
  FETCHING_INITIAL_USER,
  INITIAL_USER_FETCHED,
  AUTH_FAILED,
  USER_NOT_REGISTERED,
  USER_REGISTERED,
  REGISTERING_NEW_USER,
  NEW_USER_REGISTERED,
} from '../constants';
const initialState = {
  isLoading: null,
  currentUser: null,
  isRegisteredUser: null,
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
    case USER_REGISTERED:
      return {
        ...state,
        isRegisteredUser: true,
        currentUser: {...state.currentUser, ...action.payload},
      };
    case NEW_USER_REGISTERED:
      return {
        ...state,
        isLoading: false,
        isRegisteredUser: true,
        currentUser: {...state.currentUser, ...action.payload},
      };
    case USER_NOT_REGISTERED:
      return {...state, isRegisteredUser: false};
    default:
      return state;
  }
};
