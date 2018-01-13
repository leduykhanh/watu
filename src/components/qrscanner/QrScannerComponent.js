import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import {BarCodeScanner} from 'expo';
import { connectStyle } from 'native-base';

class QrScannerComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
		  <BarCodeScanner {...{
              ...this.props,
              onBarCodeRead: e => this.onBarCodeRead(e),
              style: {
				  width: 200,
		          height: 200,
			  }
          }}/>
      </View>
    );
  }

  onBarCodeRead(e) {
    console.log(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default QrScannerComponent;
