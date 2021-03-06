import initalState from './initalState';

const apiVersion = 'v0.2';

// Staging
const BASE_API_URL = 'https://survis.purecode.vn/api/';
export const LOGIN_API = BASE_API_URL + '?type=login';
export const REGISTER_API = BASE_API_URL + '?type=register';

// Development
// const BASE_API_URL = '';
// export const LOGIN_API = '';

// Production
// const BASE_API_URL = '';
// export const LOGIN_API = '';

const MOCK_API_URL = '';

export const GET_PROFILE_API = BASE_API_URL + '?type=profile';
export const GET_PROMOTION_DETAIL_API = BASE_API_URL + '?type=promotiondetail';
export const GET_SHOP_DETAIL_API = BASE_API_URL + '?type=shopdetail';
export const GET_SHOP_ITEMS_API = BASE_API_URL + '?type=items';
export const GET_HISTORY_API = BASE_API_URL + '?type=history';
export const GET_LOYALTY_API = BASE_API_URL + '?type=loyalty';
export const GET_ITEM_DETAIL_API = BASE_API_URL + '?type=itemdetail';
export const PLACE_ORDER_API = BASE_API_URL + '?type=placeorder';
export const GET_REVIEW_API = BASE_API_URL + '?type=reviews';
export const GET_PRIZE_API = BASE_API_URL + '?type=prize';
export const GET_PROMOTIONS_API = BASE_API_URL + '?type=promotions';
export const GET_NEWSHOPS_API = BASE_API_URL + '?type=newshops';
export const GET_HIGHRATINGSHOPS_API = BASE_API_URL + '?type=highratingshops';
export const GET_NEARBYSHOPS_API = BASE_API_URL + '?type=nearbyshops';
export const GET_PAYMENT_API = BASE_API_URL + '?type=paymentinfo';
export const GET_CAT_API = BASE_API_URL + '?type=category';
export const FOGET_PASSWORD_API = BASE_API_URL + '?type=forgetpwd';
export const GET_NOTIFICATION_API = BASE_API_URL + '?type=notification&cmd=get';
export const RATING_API = BASE_API_URL + '?type=rating&cmd=set';
export const DEVICE_API = BASE_API_URL + '/device';
export const SIGNUP_LINK = BASE_API_URL + '/account/signup';


export const NUMBER_ACTIVITIES_ON_DASHBOARD = 10;

export const REFRESH_TOKEN_LIFESPAN = 3000; // In seconds

export const KEYBOARD_IDLE_TIME = 1000;

export const SIGNALR_RECONNECTING_TIMEFRAME = 30000;

export const STATE_LOGIN_PENDING = 'STATE_LOGIN_PENDING';
export const STATE_LOGIN_ERROR = 'STATE_LOGIN_ERROR';
export const STATE_LOGIN_SUCCESS = 'STATE_LOGIN_SUCCESS';
export const STATE_LOGOUT_SUCCESS = 'STATE_LOGOUT_SUCCESS';

export const STATE_REGISTER_PENDING = 'STATE_REGISTER_PENDING';
export const STATE_REGISTER_ERROR = 'STATE_REGISTER_ERROR';
export const STATE_REGISTER_SUCCESS = 'STATE_REGISTER_SUCCESS';

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
export const GET_NEARBYSHOPS_FAILED = 'GET_NEARBYSHOPS_FAILED';

export const STATE_HISTORY_PENDING = 'STATE_HISTORY_PENDING';
export const STATE_HISTORY_ERROR = 'STATE_HISTORY_ERROR';
export const STATE_HISTORY_SUCCESS = 'STATE_HISTORY_SUCCESS';

export const STATE_LOYALTY_PENDING = 'STATE_LOYALTY_PENDING';
export const STATE_LOYALTY_ERROR = 'STATE_LOYALTY_ERROR';
export const STATE_LOYALTY_SUCCESS = 'STATE_LOYALTY_SUCCESS';

export const STATE_PAYMENTINFO_PENDING = 'STATE_PAYMENTINFO_PENDING';
export const STATE_PAYMENTINFO_ERROR = 'STATE_PAYMENTINFO_ERROR';
export const STATE_PAYMENTINFO_SUCCESS = 'STATE_PAYMENTINFO_SUCCESS';

export const GET_NOTIFICATION_PENDING = 'GET_NOTIFICATION_PENDING';
export const GET_NOTIFICATION_SUCCESS = 'GET_NOTIFICATION_SUCCESS';
export const GET_NOTIFICATION_FAILED = 'GET_NOTIFICATION_FAILED';

export const STATE_LUCKYDRAW_PENDING = 'STATE_LUCKYDRAW_PENDING';
export const STATE_LUCKYDRAW_ERROR = 'STATE_LUCKYDRAW_ERROR';
export const STATE_LUCKYDRAW_SUCCESS = 'STATE_LUCKYDRAW_SUCCESS';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAR_CART = 'CLEAR_CART';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';


export {initalState};
