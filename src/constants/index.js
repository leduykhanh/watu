import initalState from './initalState';

const apiVersion = 'v0.2';

// Staging
const BASE_API_URL = 'http://watu1.haizzz.com/api/';
export const LOGIN_API = BASE_API_URL + '?type=login';
export const REGISTER_API = BASE_API_URL + '?type=register';

// Development
// const BASE_API_URL = '';
// export const LOGIN_API = '';

// Production
// const BASE_API_URL = '';
// export const LOGIN_API = '';

const MOCK_API_URL = '';

export const GET_PROFILE_API = BASE_API_URL + '/profile';
export const CHANGE_PASSWORD_API = BASE_API_URL + '/profile/changePassword';
export const GET_PROMOTIONS_API = BASE_API_URL + '?type=promotions';
export const GET_NEWSHOPS_API = BASE_API_URL + '?type=newshops';
export const GET_HIGHRATINGSHOPS_API = BASE_API_URL + '?type=highratingshops';
export const GET_NEARBYSHOPS_API = BASE_API_URL + '?type=nearbyshops';
export const GET_LOOKUP_API = BASE_API_URL + '/lookup';
export const GET_CAT_API = BASE_API_URL + '?type=category';
export const GET_KOKU_RATE_API = BASE_API_URL + '/rate';
export const DEVICE_API = BASE_API_URL + '/device';
export const SIGNUP_LINK = BASE_API_URL + '/account/signup';

// export const KOKU_LOGO_URL = 'https://d1qb2nb5cznatu.cloudfront.net/startups/i/3362811-ac1ddb13d4bb672de6550c6ab1078968-medium_jpg.jpg?buster=1498795012';

export const KOKU_LOGO_URL = '../../assets/images/logo.jpg';
export const NUMBER_ACTIVITIES_ON_DASHBOARD = 10;

export const REFRESH_TOKEN_LIFESPAN = 3000; // In seconds

export const KEYBOARD_IDLE_TIME = 1000;

export const SIGNALR_RECONNECTING_TIMEFRAME = 30000;

export const STATE_LOGIN_PENDING = 'STATE_LOGIN_PENDING';
export const STATE_LOGIN_ERROR = 'STATE_LOGIN_ERROR';
export const STATE_LOGIN_SUCCESS = 'STATE_LOGIN_SUCCESS';
export const STATE_LOGOUT_SUCCESS = 'STATE_LOGOUT_SUCCESS';

export const STATE_REFRESH_PENDING = 'STATE_REFRESH_PENDING';
export const STATE_REFRESH_SUCCESS = 'STATE_REFRESH_SUCCESS';
export const STATE_REFRESH_ERROR = 'STATE_REFRESH_ERROR';

export const STATE_GET_PROFILE_PENDING = 'STATE_GET_PROFILE_PENDING';
export const STATE_GET_PROFILE_SUCCESS = 'STATE_GET_PROFILE_SUCCESS';
export const STATE_GET_PROFILE_ERROR = 'STATE_GET_PROFILE_ERROR';

export const SET_PUSH_TOKEN = 'SET_PUSH_TOKEN';
export const SET_PUSH_TOKEN_FAIL = 'SET_PUSH_TOKEN_FAIL';
export const SEND_PUSH_TOKEN = 'SEND_PUSH_TOKEN';
export const UPDATE_PUSH_TOKEN = 'UPDATE_PUSH_TOKEN';
export const SET_DEVICE_ID = 'SET_DEVICE_ID';
export const SET_DEVICE_ID_FAIL = 'SET_DEVICE_ID_FAIL';

export const GET_PROMOTION_PENDING = 'GET_PROMOTION_PENDING';
export const GET_PROMOTION_SUCCESS = 'GET_PROMOTION_SUCCESS';
export const GET_PROMOTION_FAILED = 'GET_PROMOTION_FAILED';

export const GET_NEWSHOP_PENDING = 'GET_NEWSHOP_PENDING';
export const GET_NEWSHOP_SUCCESS = 'GET_NEWSHOP_SUCCESS';
export const GET_NEWSHOP_FAILED = 'GET_NEWSHOP_FAILED';

export const GET_CAT_PENDING = 'GET_CAT_PENDING';
export const GET_CAT_SUCCESS = 'GET_CAT_SUCCESS';
export const GET_CAT_FAILED = 'GET_CAT_FAILED';

export const GET_HIGHRATINGSHOPS_PENDING = 'GET_HIGHRATINGSHOPS_PENDING';
export const GET_HIGHRATINGSHOPS_SUCCESS = 'GET_HIGHRATINGSHOPS_SUCCESS';
export const GET_HIGHRATINGSHOPS_FAILED = 'GET_HIGHRATINGSHOPS_FAILED';

export const GET_NEARBYSHOPS_PENDING = 'GET_NEARBYSHOPS_PENDING';
export const GET_NEARBYSHOPS_SUCCESS = 'GET_NEARBYSHOPS_SUCCESS';
export const GET_NEARBYSHOPS_FAILED = 'GET_NEARBYSHOPS_FAILED'


export {initalState};
