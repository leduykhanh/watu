import React, {Component} from 'react';
import {View, Text} from 'native-base';
import toLocaleString from '../../../utils/numberHelper';

export default SubScript16 = (props) => {
  let numRep = toLocaleString(props.number);
  let firstPart = numRep.split(".")[0] + ".";
  let secondPart = numRep.split(".")[1];
  secondPart = secondPart?(secondPart + '00').substr(0,2):'00';
  let sign = props.sign? props.sign: '';
  return (
    <View horizontal>
      <Text {...props} style={{justifyContent:'flex-start', fontSize:props.fontSize}}>{`${sign} ${firstPart}`}</Text>
      <Text {...props} style={{justifyContent:'flex-start', fontSize:props.fontSize/2}}>{secondPart}</Text>
    </View>  
  )
}