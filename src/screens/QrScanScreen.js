import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2 } from 'native-base';
import { StyleSheet } from 'react-native';
// import { Permissions, BarCodeScanner } from "expo";
import { Actions } from 'react-native-router-flux';
import { RNCamera } from 'react-native-camera';

import QrScannerStyle from '../../wat-themes/styles/QrScanner'
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';


class QrScanScreen extends Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.state.permissions = new Map()
		this.askForPermissions = 'CAMERA'
	}
	async componentDidMount() {
		// let askForPermissions = [].concat(this.askForPermissions)
		// for(let i = 0;i < askForPermissions.length;i++) {
		// 	await this.requestPermission(askForPermissions[i])
		// }
        this.setState(this.state)
    }
	async requestPermission(p) {
        const {status} = await Permissions.askAsync(Permissions[p])
        this.state.permissions.set(p, status === 'granted')
    }
	onBarCodeRead(e) {
		Actions.replace('luckydraw');
	}

	renderContent() {
		return	<View style={styles.container}>
							<RNCamera
		            ref={ref => {
		              this.camera = ref;
		            }}
								onBarCodeRead={e => this.onBarCodeRead(e)}
		            style = {QrScannerStyle.scanningFrame}
		            type={RNCamera.Constants.Type.back}
		            flashMode={RNCamera.Constants.FlashMode.on}
		            permissionDialogTitle={'Permission to use camera'}
		            permissionDialogMessage={'We need your permission to use your camera phone'}
	        	/>
					</View>;
		// if (this.state.permissions.get('CAMERA')) {
		// 	return <BarCodeScanner {...{
		// 		onBarCodeRead: e => this.onBarCodeRead(e),
		// 		style: QrScannerStyle.scanningFrame
		// 	}}/>
		// }
		// const me = this
		// return <View center style={QrScannerStyle.buttonContainer}>
		// 	<Text>No permission to access CAMERA</Text>
		// 	<Button block warning onPress={e => Actions.pop()}>
		// 		<Text>Back</Text>

	}
	render() {
      return (
        <Container>
            <Header />
            <Content center contentContainerStyle={QrScannerStyle.container}>
				{this.renderContent()}
            </Content>
            <Footer />
        </Container>
      );
    }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QrScanScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
});
