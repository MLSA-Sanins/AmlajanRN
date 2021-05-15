import {
  GEOLOCATION_API_KEY,
  REVERSEGEOCODE_URL,
  GEOLOCATION_REST_API,
} from '@env';
import axios from 'axios';

export const fetchAddress = (lat, long, rad) =>
  axios.get(
    `${REVERSEGEOCODE_URL}?apiKey=${GEOLOCATION_REST_API}&mode=retrieveAddresses&prox=${lat},${long}&maxresults=1`,
    {},
  );

//https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=41.8842%2C-87.6388%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=H6XyiCT0w1t9GgTjqhRXxDMrVj9h78ya3NuxlwM7XUs

// export const fetchAddress = () =>
//   axios.get(
//     'https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?prox=41.8842%2C-87.6388%2C250&mode=retrieveAddresses&maxresults=1&gen=9&apiKey=H6XyiCT0w1t9GgTjqhRXxDMrVj9h78ya3NuxlwM7XUs',
//     {},
//   );

// params: {
//   apiKey: `${GEOLOCATION_REST_API}`,
//   gen: 9,
//   jsonattributes: 1,
//   maxresults: 1,
//   minresults: 1,
//   mode: 'trackPosition',
//   prox: lat + ',' + long + ',' + rad,
// },

//?apiKey=${GEOLOCATION_REST_API}&mode=retrieveAddresses&prox=${lat},${long}
