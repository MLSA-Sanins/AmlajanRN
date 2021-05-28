import {
  ASK_PERMISSIONS_LOCATION,
  LOADING_LOCATION,
  LOCATION_LOADED,
  LOADING_ADDRESS,
  ADDRESS_LOADED,
  LOCATION_ERROR,
  ADDRESS_ERROR,
  ADDRESS_UPDATED,
} from '../constants';

import {getErrors, clearErrors} from './errorActions';
import RNLocation from 'react-native-location';
import {GEOLOCATION_API_KEY, REVERSEGEOCODE_URL} from '@env';
import {fetchAddress} from '../../api/geolocationApi';
import {getStateFromPath} from '@react-navigation/core';

const requestLocationPermission = async dispatch => {
  try {
    RNLocation.configure({
      distanceFilter: 100, // Meters
      desiredAccuracy: {
        ios: 'best',
        android: 'highAccuracy',
      },
      // Android only
      androidProvider: 'auto',
      maxWaitTime: 5000, // Milliseconds
      // iOS Only
      activityType: 'other',
      allowsBackgroundLocationUpdates: false,
      headingFilter: 1, // Degrees
      headingOrientation: 'portrait',
      pausesLocationUpdatesAutomatically: false,
      showsBackgroundLocationIndicator: false,
    });
    const granted = await RNLocation.requestPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'fine', // or 'fine'
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });
    if (granted) {
      const location = await RNLocation.getLatestLocation({timeout: 60000});
      return location;
    } else {
      return 'Permission Denied';
    }
  } catch (err) {
    dispatch(getErrors(err));
    console.warn(err);
  }
};

//asking for location permission and geting location back
export const fecthLocationAndAddress = () => async (dispatch, getState) => {
  if (getState().user.currentUser.location.address) {
    dispatch({type: LOCATION_LOADED});
    return;
  }
  try {
    dispatch({type: LOADING_ADDRESS});
    const location = await requestLocationPermission(dispatch);
    if (location === 'Permission Denied') {
      dispatch({
        type: ADDRESS_LOADED,
        payload: {
          latitude: 28.63409,
          longitude: 77.21693,
          address: 'Delhi, DL, India',
        },
      });
      throw 'Permission Denied';
    }
    const address = await fetchAddress(
      location.latitude,
      location.longitude,
      500,
    );

    dispatch({
      type: ADDRESS_LOADED,
      payload: {
        ...location,
        address: address.data.Response.View[0].Result[0].Location.Address.Label,
      },
    });
  } catch (e) {
    // console.log(e);
    dispatch({
      type: ADDRESS_LOADED,
      payload: {
        latitude: 28.63409,
        longitude: 77.21693,
        address: 'Delhi, DL, India',
      },
    });
    dispatch({type: LOCATION_ERROR, payload: e});
    dispatch(getErrors(e));
  }
};

export const updateAddress = address => async dispatch => {
  try {
    dispatch({type: ADDRESS_UPDATED, payload: address});
  } catch (e) {
    console.log('updation failed');
  }
};
