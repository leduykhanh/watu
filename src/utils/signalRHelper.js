import signalr from 'react-native-signalr'
import {MessageBarManager} from 'react-native-message-bar'
import {SIGNALR_RECONNECTING_TIMEFRAME} from '../constants'

let connection = null
let proxy = null
let isConnecting = false

function setupSignalR(store, dispatch, token) {
  const host = 'https://kokudevrealtime.azurewebsites.net';
  if (connection) {
    connection.stop();
  }
  connection = signalr.hubConnection(host);
  connection.logging = true;
  connection.qs = {
    'Bearer': token
  };
  proxy = connection.createHubProxy('notificationHub');
  proxy.on('supplyCreated', function() {
    MessageBarManager.showAlert({
      position: 'bottom',
      animationType: 'SlideFromLeft',
      title: 'Successful',
      message: 'SignalR works',
      duration: 30000,
      alertType: 'success'
    });
  });
  proxy.on('supplyUpdated', function(message) {
    if (message.SupplyId !== connection.id) {}
  })
  proxy.on('orderCreated', function() {
    //dispatch(getNotification(store.getState().notification, true))
    // MessageBarManager.showAlert({
    //   position: 'bottom',
    //   animationType: 'SlideFromLeft',
    //   title: 'Successful',
    //   message: 'SignalR works',
    //   duration: 3000,
    //   alertType: 'success'
    // })
    console.log('worksss');
  })
  proxy.on('orderUpdated', function(message) {})
}

export const startSignalRConnection = (store, token) => {
  setupSignalR(store, store.dispatch, token);
  if (isConnecting === true) {
    return
  }
  isConnecting = true;
  connection
    .start()
    .done(() => {
      isConnecting = false;
    })
    .fail((error) => {
      isConnecting = false;
      if (console && console.log) 
        console.log(`Fail to connect to signalr, reconnecting in ${SIGNALR_RECONNECTING_TIMEFRAME / 1000} seconds`);
      window.setTimeout(() => {
        if (console && console.log) 
          console.log('Reconnecting signalR');
        startSignalRConnection(store, token);
      }, SIGNALR_RECONNECTING_TIMEFRAME);
    });
}
