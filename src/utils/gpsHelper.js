import {Alert, Linking, Platform} from "react-native";

export function getDistance(lat1, lon1, lat2, lon2) {
	var p = 0.017453292519943295;    // Math.PI / 180
	var c = Math.cos;
	var a = 0.5 - c((lat2 - lat1) * p)/2 +
	      c(lat1 * p) * c(lat2 * p) *
	      (1 - c((lon2 - lon1) * p))/2;

	return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

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

export default openGps = (lat, lng) => {
  const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=:';
  const latLng = `${lat},${lng}`;
  const label = 'Wat';
  const url = Platform.OS === 'ios' ? `${scheme}${label}@${latLng}` : `${scheme}${latLng}(${label})`;
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
