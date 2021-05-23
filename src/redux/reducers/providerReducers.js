import {
  FETCHING_ALL_PROVIDERS,
  ALL_PROVIDERS_FETCHED,
  FETCHING_PROVIDER_FAILED,
  LOGOUT_USER,
} from '../constants';

const initialState = {
  allProviders: [],
  isLoading: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case FETCHING_ALL_PROVIDERS:
      return {...state, isLoading: true};
    case ALL_PROVIDERS_FETCHED:
      return {...state, allProviders: actions.payload, isLoading: false};
    case FETCHING_PROVIDER_FAILED:
      return {...initialState};
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
};
