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
