import React from 'react';
import PropTypes from 'prop-types';
import ImageLoad from 'react-native-image-placeholder';

const Img = (props) =>
  (
    <ImageLoad
    {...props}
    loadingStyle={{ size: 'large', color: '"rgb(249,174,24)' }}
    placeholderSource="./blank.jpg"
    />
)

export default Img;
