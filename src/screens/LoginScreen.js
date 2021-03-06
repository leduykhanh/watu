import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Actions} from 'react-native-router-flux'
import {Tabs, Tab, Header, TabHeading, Item, Input, Label, Button, H1, Text, View, Icon, H3, Form, CheckBox} from 'native-base'
import {StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import * as actions from '../actions/userActions'

import styles from './styles'
import {BaseLightbox, LoadingButton, InputView} from '../components/common'

import itemHelper, {substr} from '../utils/itemHelper'
import LoginScreenStyle from '../../wat-themes/styles/screens/LoginScreen'

class LoginScreen extends Component {

	state = {
		// username: 'leejangkoo+1@gmail.com',
		// password: '123456',
		// name: 'Jangkoo',
		username: null,
		password: null,
		name: null,
	}

	componentDidMount() {
		if (this.props.error !== true && this.props.user.oidc && this.props.user.oidc.access_token) {
		  Actions.reset('drawer')
		}
	}

	onLogin() {
		this.setState({typing:false})
		this.props.actions.login(this.state.username, this.state.password)
	}

	onRegister() {
		this.setState({typing:false})
		this.props.actions.register(this.state.username, this.state.password)
	}

	loginFB() {
		//TODO
	}

	renderLoginWithFacebook() {
		return null
		return [
			<View style={{marginTop: 32, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
				<View style={{position: 'absolute', left: 0, top: 20, width: '100%', height: 1, backgroundColor: '#cccccc'}}/>
				<Text style={{backgroundColor: 'white', padding: 10, color: 'rgb(170,170,170)', fontSize: 18, fontWeight: 'bold'}}>Or</Text>
			</View>,
			<View style={{marginTop: 16, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
				<Icon name='logo-facebook' style={{fontSize: 44, color: 'rgb(68,96,160)'}} onPress={this.loginFB.bind(this)}/>
			</View>
		]
	}

	renderLogin() {
		return <View style={LoginScreenStyle.form}>
			<Text red fs12>{this.props.user.error}</Text>
			<Text bold fs12>Email</Text>
			<Item login error={this.props.user.error!==null && !this.state.typing}>
				<Input value={this.state.username}
				 onChangeText={(username) => this.setState({username,typing:true})}
				 autoCapitalize='none' autoCorrect={false}
				 placeholder='Please enter email'
				 />
			</Item>
			<Text bold fs12>Password</Text>
			<Item login error={this.props.user.error!==null&&!this.state.typing} >
				<Input value={this.state.password}
				 onChangeText={(password) => this.setState({password,typing:true})}
				 autoCapitalize='none'
				 secureTextEntry={true}
				 placeholder='Your password'
			 	/>
			</Item>
			<View style={LoginScreenStyle.buttons}>
				<Button onPress={this.onLogin.bind(this)} full small><Text bold>LOG IN</Text></Button>
			</View>
			<View horizontal style={LoginScreenStyle.forget_password}>
				<Text onPress={Actions.pop} fs12 style={LoginScreenStyle.forget_password_text}>Forgot password</Text>
			</View>
		</View>
	}

	renderRegister(){
		return (
		  <View style={LoginScreenStyle.form}>
		    <Text red small style={styles.heavyMargin}>{this.props.user.registerError}</Text>
		    <Text bold fs12>Email</Text>
		    <Item login error={this.props.user.error!==null && !this.state.typing} >
		      <Input value={this.state.username}
		             onChangeText={(username) => this.setState({username,typing:true})}
		             autoCapitalize='none' autoCorrect={false}
					 placeholder='Please enter email'
		      />
		    </Item>
		    <Text bold fs12>Password</Text>
		    <Item login error={this.props.user.error!==null&&!this.state.typing} >
		      <Input value={this.state.password}
		        	onChangeText={(password) => this.setState({password,typing:true})}
		        	autoCapitalize='none'
		        	secureTextEntry={true}
					placeholder='Please enter your password'
				/>
		    </Item>
		    <View horizontal>
		      <CheckBox checked/>
		      <Text>   </Text>
		      <Text fs12>I agree with terms and conditions</Text>
		    </View>
		    <View style={{ marginTop: 20 }}>
		      <LoadingButton isLoading={this.props.user.isRegistering} text='REGISTER' onPress={this.onRegister.bind(this)} full small />
		    </View>
		  </View>
		)
	}



	render() {
		const isLoading = this.props.user.isLoggingIn ? this.props.user.isLoggingIn : false
		const {container, topView} = loginStyles
		return (
		  <BaseLightbox style={{flex: 1, height: 300}}>
		    <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
		      <Icon name='md-close' onPress={Actions.pop} style={{fontSize:30,  marginRight: 10, marginTop: 24}}/>
		    </View>
		    {/*<View style={topView}>
		      <Image source={require('../../assets/images/logo.png')} style={{ width: 100, height: 100, marginBottom: 12}} />
		    </View> */}
		    <View style={LoginScreenStyle.container}>
		      <Tabs tabBarUnderlineStyle={{backgroundColor: "rgb(249,174,24)"}} activeTextColor='rgb(67,72,77)'>
		        <Tab heading="Login">
		          {this.renderLogin()}
		        </Tab>
		        <Tab heading="Register">
		          {this.renderRegister()}
		        </Tab>
		      </Tabs>
			  {this.renderLoginWithFacebook()}
		    </View>
		  </BaseLightbox>
		)
	}

}

const loginStyles = StyleSheet.create({

  container: {
    justifyContent : 'center',
    flexDirection: 'column',
  },
  topView: {
    justifyContent:'center',
    marginBottom:10,
    flexDirection:'column',
    alignItems:'center'
  }

})

function mapStateToProps(state) {
  return {
    user: state.user,
    state: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
