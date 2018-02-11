import React from 'react';
import StarRating from 'react-native-star-rating';
import * as RatingApi from '../../api/RatingApi';

const Rating = (props) => {
  const {totalrate, itemid, shopid, reviewid, usr_id} = props;
  const data = {
    usr_id
  };
  return
    <StarRating
  		disabled={false}
  		maxStars={5}
  		rating={totalrate}
  		starSize={15}
  		starColor={'rgb(249,174,24)'}
  		selectedStar={(rating) => {
        data.usr_rating = rating;
        RatingApi.rate(data, itemid, shopid, reviewid )
      }}
  	/>
}
