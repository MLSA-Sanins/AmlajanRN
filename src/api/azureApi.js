import {API_ENDPOINT_TWO, API_ENDPOINT, AZURE_API_ENDPOINT} from '@env';
import axios from 'axios';

export const checkUserExistence = uid =>
  axios.get(`${AZURE_API_ENDPOINT}checkUserExists`, {headers: {uid: uid}});

export const registerUser = (role, data) =>
  axios.post(`${AZURE_API_ENDPOINT}${role}/addUserdetails`, data);

export const getAllProviders = () =>
  axios.get(`${AZURE_API_ENDPOINT}getAllProviders`);

export const getNearbyProvider = data =>
  axios.post(`${AZURE_API_ENDPOINT}getNearbyProviders`, data);
