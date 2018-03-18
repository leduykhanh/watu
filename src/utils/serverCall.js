import axios from 'axios'
import {Actions} from 'react-native-router-flux'
import {MessageBarManager} from 'react-native-message-bar'
import {setOidc} from '../utils/persistStore'
import {AsyncStorage} from 'react-native'
// import {} from '../store/configureStore'

const serverCall = axios.create({
  timeout: 60000,
  maxRedirects: 10,
  maxContentLength: 50 * 1000 * 1000
})

serverCall
  .defaults
  .headers['token'] = 'UDgwU0hJSW9CZlQ2VmVGaXJ5R296cXVRS1B2Z1c2bXg0SDB4dU5mbDRPOD0'

serverCall
  .interceptors
  .response
  .use(response => {
    return response;
  }, error => {
    const {code, message} = error.response.data;
    //console.log('HTTP Error Response', error, error.response)
    if (error.response.status === 400) {
      return Promise.reject(error);
    }
    // if (error.response.status === 401 || error.response.status === 403) {
    //   Actions.popTo('login')
    //   return
    // }
    serverCall
      .defaults
      .headers['token'] = '';

    AsyncStorage.clear();
    setOidc(null);

    Actions.replace('login', {error: true});

    // MessageBarManager.showAlert({
    //   position: 'bottom',
    //   animationType: 'SlideFromLeft',
    //   title: 'Error found',
    //   message: `${code} - ${message}`,
    //   duration: 3000,
    //   alertType: 'error'
    // })
  });
export function addLocation(long, lat) {
  serverCall
    .interceptors
    .request
    .use(function(config) {
      // Do something before request is sent
      config.params = {
        longtitude: long,
        latitude: lat
      };
      return config;
    }, function(error) {
      // Do something with request error
      return Promise.reject(error);
    })
}
export default serverCall
