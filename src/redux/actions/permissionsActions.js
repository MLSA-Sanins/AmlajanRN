import {
  ASK_PERMISSIONS_LOCATION,
  LOADING_LOCATION,
  LOCATION_LOADED,
  LOADING_ADDRESS,
  ADDRESS_LOADED,
  LOCATION_ERROR,
  ADDRESS_ERROR,
} from '../constants';

import {getErrors, clearErrors} from './errorActions';

//asking for location permission and geting location back
export const askAndFecthLocation = (PermissionsAndroid) => async dispatch => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.ACCESS_FINE_LOCATION,
      {
        title: 'Amlajan App Location Permission',
        message:
          'Amlajan App needs access to your location' +
          'so that we can set you details automatically.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location is being Fetched');
      console.log(PermissionsAndroid.RESULTS);
    } else {
      console.log('Location permission denied');
    }
  } catch (e) {
    console.log(e);
    dispatch(getErrors(e));
  }
};
