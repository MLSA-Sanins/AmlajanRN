import {API_ENDPOINT_TWO, API_ENDPOINT} from '@env';
import axios from 'axios';

export const checkUserExistence = uid =>
  axios.get(`${API_ENDPOINT_TWO}checkUserExists`, {headers: {uid: uid}});

export const registerUser = (role, data) =>
  axios.post(`${API_ENDPOINT_TWO}${role}/addUserdetails`, data);
