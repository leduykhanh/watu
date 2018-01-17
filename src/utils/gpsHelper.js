import {Alert, Linking, Platform} from "react-native";


openExternalApp = (url) => {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert(
        'ERROR',
        'Unable to open: ' + url,
        [
          {text: 'OK'},
        ]
      );
    }
  });
}

export default openGps = (lat, long) => {
  var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:'
  var url = `${scheme}${lat},${long}`;
  openExternalApp(url)
}

export function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
  ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return Math.floor(d);
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
