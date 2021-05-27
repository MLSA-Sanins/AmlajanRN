import {
  FETCHING_ALL_PROVIDERS,
  ALL_PROVIDERS_FETCHED,
  FETCHING_PROVIDER_FAILED,
  LOGOUT_USER,
  FETCHING_NEARBY_PROVIDERS,
  NEARBY_PROVIDERS_FETCHED,
  LOCATION_LOADED,
} from '../constants';

const initialState = {
  allProviders: [],
  nearbyProviders: [],
  isLoading: null,
  loadingNearbyProviders: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case FETCHING_NEARBY_PROVIDERS:
      return {...state, loadingNearbyProviders: true};
    case FETCHING_ALL_PROVIDERS:
      return {...state, isLoading: true};
    case ALL_PROVIDERS_FETCHED:
      return {...state, allProviders: actions.payload, isLoading: false};
    case LOCATION_LOADED:
      return {...state, isLoading: false, loadingNearbyProviders: false};
    case NEARBY_PROVIDERS_FETCHED:
      return {
        ...state,
        nearbyProviders: actions.payload,
        loadingNearbyProviders: false,
      };
    case FETCHING_PROVIDER_FAILED:
      return {...state, isLoading: false, loadingNearbyProviders: false};
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
};
