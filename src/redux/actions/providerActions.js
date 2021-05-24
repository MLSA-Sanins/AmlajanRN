import {
  FETCHING_ALL_PROVIDERS,
  ALL_PROVIDERS_FETCHED,
  FETCHING_PROVIDER_FAILED,
  FETCHING_NEARBY_PROVIDERS,
  NEARBY_PROVIDERS_FETCHED,
} from '../constants';
import {getAllProviders, getNearbyProvider} from '../../api/azureApi';
import {clearErrors, getErrors} from './errorActions';

export const getAllO2Providers = () => async (dispatch, getState) => {
  if (
    // getState().providers.allProviders.length !== 0 &&
    getState().providers.isLoading === true
  ) {
    return;
  }
  try {
    dispatch({type: FETCHING_ALL_PROVIDERS});
    const response = await getAllProviders();
    dispatch(clearErrors());
    dispatch({
      type: ALL_PROVIDERS_FETCHED,
      payload: response.data.Provider_list,
    });
  } catch (e) {
    dispatch({type: FETCHING_PROVIDER_FAILED});
    dispatch(getErrors(e));
  }
};

export const getNearbyO2Providers = () => async (dispatch, getState) => {
  if (
    // getState().providers.allProviders.length !== 0 &&
    getState().providers.loadingNearbyProviders === true
  ) {
    return;
  }
  try {
    dispatch({type: FETCHING_NEARBY_PROVIDERS});
    var data = JSON.stringify({
      latitude: getState().user.currentUser.location.latitude,
      longitude: getState().user.currentUser.location.longitude,
    });

    const response = await getNearbyProvider(data);
    dispatch(clearErrors());
    dispatch({
      type: NEARBY_PROVIDERS_FETCHED,
      payload: response.data.Provider_list,
    });
  } catch (e) {
    dispatch({type: FETCHING_PROVIDER_FAILED});
    dispatch(getErrors(e));
  }
};

export const getEveryProvider = () => async dispatch => {
  try {
    await dispatch(getAllO2Providers());
    await dispatch(getNearbyO2Providers());
  } catch (e) {
    dispatch(getErrors(e));
  }
};
