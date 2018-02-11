import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, View, Content, Form, Item, Input, Spinner, Label, Button, Title, Text, H2, Tabs, Tab,
  TabHeading, Icon, Radio } from 'native-base';
import DatePicker from 'react-native-datepicker'
import {StyleSheet, Image, ScrollView} from 'react-native';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import { ImageBackground } from '../components/common';
import HistoryItem from '../components/profile/HistoryItem';
import LoyaltyItem from '../components/profile/LoyaltyItem';
import * as actions from "../actions/profileActions";
import * as userActions from "../actions/userActions";
import * as ProfileApi from "../api/ProfileApi";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

import ProfileScreenStyle from '../../wat-themes/styles/ProfileScreen';

const tabsProps = {
	tabBarUnderlineStyle: {
		backgroundColor: "rgb(249,174,24)",
    },
};
const tabProps = {
	tabStyle: {backgroundColor: 'transparent'},
	activeTabStyle: {backgroundColor: 'rgb(249,174,24)'},
	activeTextStyle: {color: '#fff'}
}
var radio_props = [
  {label: 'Visa ', value: 'visa'},
  {label: 'Master ', value: 'master'},
];

class ProfileScreen extends Component {
  state = {
    editPersonal: false,
    changePwd: false,
    editShipping: false,
    userObject: {
      usr_mobile: null,
      usr_fname: this.props.profile.fname ? this.props.profile.fname : '',
      usr_lname: null,
      usr_birthday: null,
      usr_status: null,
      usr_email: this.props.profile.email ? this.props.profile.email : '',
      usr_password: null,
      usr_avatar: null
    },
    paymentObject: {
      ucc_name: null,
      ucc_num: null,
      ucc_cvc: null,
      ucc_expire: null,
      ucc_type: null,
      ucc_usr_id: null
    }
  };

  componentWillMount(){
    this.props.actions.getHistory();
    this.props.actions.getLoyalty();
  }

  componentWillReceiveProps(nextProps) {
    const userObject = Object.assign({}, this.state.userObject);
    userObject.usr_fname = nextProps.profile.fname;
    userObject.usr_email = nextProps.profile.email;
    this.setState({userObject});
  }

  renderHistory(){

    return(
      <View>
        {
          this.props.profile.history.list.map(
            item => (
              <HistoryItem item={item} />
            )
          )
        }
      </View>
    )

  }

  renderLoyalty(){

    return(
      <View>
        {
          this.props.profile.loyalty.list.map(
            item => (
              <LoyaltyItem item={item} />
            )
          )
        }
      </View>
    )

  }

  changeAttribute(attribute, value){
    const userObject = this.state.userObject;
    userObject[attribute] = value;
    this.setState({userObject,typing:true});
  }

  changePaymentAttribute(attribute, value){
    const paymentObject = this.state.paymentObject;
    paymentObject[attribute] = value;
    this.setState({paymentObject,typing:true});
  }

  onSave(){
    ProfileApi.updateProfile(this.state.userObject).then(
      (res) => this.setState({editPersonal: false})
    )
  }

  onAddPayment(){
      this.props.actions.addPaymentInfo(this.state.paymentObject);
  }

  renderSingleCard() {
    return (
      <View p-25 m-10 grey horizontal space-between>
        <Icon name="card" />
        <Text bold fs14>******1234</Text>
        <Icon name="ios-trash"/>
      </View>
    );
  }

  renderPaymentInfo() {
    const { paymentObject } = this.state;
    return (
      <View>
        {this.renderSingleCard()}
        <View p-25 m-10 grey>
          <Text bold fs12>Card holder Name</Text>
          <Item login>
            <Input style={ProfileScreenStyle.input}
              value={paymentObject.ucc_name}
              onChangeText={(ucc_name) => this.changePaymentAttribute('ucc_name', ucc_name)}
			  placeholder='Your card name'
               />
          </Item>
          <Text bold fs12>Card Number</Text>
          <Item login>
            <Input style={ProfileScreenStyle.input}
              value={paymentObject.ucc_num}
              onChangeText={(ucc_num) => this.changePaymentAttribute('ucc_num', ucc_num)}
			  placeholder='Your card number'
               />
          </Item>
          <Text bold fs12 m-b-10>Type of card</Text>
          <RadioForm
                radio_props={radio_props}
                initial={0}
                onPress={(ucc_type) => {this.changePaymentAttribute('ucc_type',ucc_type)}}
                formHorizontal={true}
                labelHorizontal={true}
                buttonColor={'#000'}
				        buttonSize={6}
                style={ProfileScreenStyle.checkbox}
              />
          <Radio />
          <View horizontal>
            <View style={{flex:3}}>
              <Text bold fs12>Expire</Text>
              <Item login>
                <Input style={ProfileScreenStyle.input}
                  value={paymentObject.ucc_expire}
                  onChangeText={(ucc_expire) => this.changePaymentAttribute('ucc_expire', ucc_expire)}
				  placeholder='Expire date'
                   />
              </Item>
            </View>
            <View style={{flex:1}}>
            </View>
            <View style={{flex:2}}>
              <Text bold fs12>Cvc</Text>
              <Item login>
                <Input style={ProfileScreenStyle.input}
                  value={paymentObject.ucc_cvc}
                  onChangeText={(ucc_cvc) => this.changePaymentAttribute('ucc_cvc', ucc_cvc)}
				  placeholder='CVC'
                   />
              </Item>
            </View>
            <View style={{flex:1}}>
            </View>
          </View>
          <Button onPress={this.onAddPayment.bind(this)} full small><Text bold>Update</Text></Button>
        </View>
        <View p-25 m-10 grey>
          <Button transparent onPress={()=> { this.setState({editShipping: true})} }
                  style={{position: 'absolute', right: 10, top: 10, padding: 20}}>
            <Icon new-shop
              name="md-create"
            />
          </Button>
          <Text bold fs14 >Shipping bill</Text>
          {
            this.state.editShipping ?
            <View>
              <Item login>
                <Input style={ProfileScreenStyle.input}
                  value={paymentObject.usr_address}
                  onChangeText={(usr_address) => this.changePaymentAttribute('usr_address', usr_address)}
                  secureTextEntry={true}

                   />
              </Item>
              <View horizontal style={{ marginTop: 20 }}>
                <Button onPress={this.onSave.bind(this)} full small><Text bold>Save</Text></Button>
                <Text> </Text>
                <Button onPress={() => this.setState({editShipping: false})} full small><Text bold>Cancel</Text></Button>
              </View>
            </View>
            :
            <Text fs12>12 Geylang Road</Text>
          }

        </View>
      </View>
    ) ;
  }

  renderPersonalInfo() {
    const userObject = this.state.userObject;
    if (this.state.editPersonal)
      return (
        <View m-10 p-25 grey>
          <Text fs12 bold>Profile</Text>
          <View m-t-10>
            <Text fs12>Name</Text>
            <Item login error={false} >
              <Input style={ProfileScreenStyle.input}
                value={userObject.usr_fname}
                onChangeText={(usr_fname) => this.changeAttribute('usr_fname', usr_fname)}
				placeholder='Please enter your name'
                 />
            </Item>
            <Text fs12>Phone</Text>
            <Item login error={false} >
              <Input style={ProfileScreenStyle.input}
                value={userObject.usr_mobile}
                onChangeText={(usr_mobile) => this.changeAttribute('usr_mobile', usr_mobile)}
				placeholder='Please enter your mobile'
                 />
            </Item>
            <Text fs12>Date of birth</Text>
            <DatePicker
              style={{width: 200, height: 24}}
              date={userObject.usr_birthday}
              mode="date"
              placeholder="Please enter your birthday"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {this.changeAttribute('usr_birthday', date)}}
            />
          </View>
          <View horizontal style={{ marginTop: 20 }}>
            <Button onPress={this.onSave.bind(this)} full small><Text bold>Save</Text></Button>
            <Text> </Text>
            <Button onPress={() => this.setState({editPersonal: false})} full small><Text bold>Cancel</Text></Button>
          </View>
        </View>
      )
    return (
      <View>
        <View p-25 m-10 grey>
          <Text fs12 bold>Profile</Text>
          <Button transparent onPress={()=> this.setState({editPersonal: true})}
                  style={{position: 'absolute', right: 10, top: 10, padding: 20}}>
            <Icon
              name="md-create"
            />
          </Button>
          <View m-t-10>
            <Text fs12>{this.props.profile.fname? this.props.profile.fname: 'Not set'}</Text>
            <Text fs12>{this.props.profile.email}</Text>
          </View>
        </View>
        <View p-25 m-10 grey>
            <Text bold theme onPress={() => this.setState({changePwd: true}) }>Change password</Text>
            {
              this.state.changePwd ?
              <View>
                <Item login>
                  <Input style={ProfileScreenStyle.input}
                    value={userObject.usr_password}
                    onChangeText={(usr_password) => this.changeAttribute('usr_password', usr_password)}
                    secureTextEntry={true}
					placeholder='Please enter your password'
                    />
                </Item>
                <View horizontal style={{ marginTop: 20 }}>
                  <Button onPress={this.onSave.bind(this)} full small><Text bold>Save</Text></Button>
                  <Text> </Text>
                  <Button onPress={() => this.setState({changePwd: false})} full small><Text bold>Cancel</Text></Button>
                </View>
              </View> : null
            }
        </View>
      </View>
    );
  }
  forgetPassword() {
    alert(`An email sent to ${this.props.profile.email}`)
  }

  render() {

    return (
      <Container>
        <ImageBackground>
          <Header back/>
          <Content>
            <View horizontal center>
              <Image source={require('../../assets/images/default-person.jpg')}
                   style={ProfileScreenStyle.profileImage} />
              <Text>{this.props.profile.fname? this.props.profile.fname: 'User 1'}</Text>
              <Button transparent onPress={()=> this.props.userActions.logout()}
                      style={ProfileScreenStyle.logoutIcon}>
                <Icon name="ios-log-out"/>
              </Button>
            </View>
            <Tabs {...tabsProps}>
              <Tab {...tabProps} heading='History'>
                {this.renderHistory()}
              </Tab>
              <Tab {...tabProps} heading='Loyality'>
                {this.renderLoyalty()}
              </Tab>
              <Tab {...tabProps} heading='Payment'>
                  {this.renderPaymentInfo()}
              </Tab>
              <Tab {...tabProps} heading='Me'>
                {this.renderPersonalInfo() }
              </Tab>
            </Tabs>

          </Content>

          <Footer />

        </ImageBackground>

      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(actions, dispatch),
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileScreen);
