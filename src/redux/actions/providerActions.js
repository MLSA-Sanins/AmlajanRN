import {
  FETCHING_ALL_PROVIDERS,
  ALL_PROVIDERS_FETCHED,
  FETCHING_PROVIDER_FAILED,
} from '../constants';
import {getAllProviders} from '../../api/azureApi';
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
      payload: response.data.Provider_lst,
    });
  } catch (e) {
    dispatch({type: FETCHING_PROVIDER_FAILED});
    dispatch(getErrors(e));
  }
};
