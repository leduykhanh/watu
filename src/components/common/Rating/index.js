import React from 'react';
import StarRating from 'react-native-star-rating';
import {connect} from 'react-redux';
import * as RatingApi from '../../../api/RatingApi';

class Rating extends React.Component {
  constructor(props) {
    super();
    this.state = {
      totalrate:props.totalrate
    }
  }
  render(){
    const {itemid, shopid, reviewid, profile : { id }} = this.props;
    const data = {
      usr_id: id
    };
    return (
      <StarRating
    		disabled={false}
    		maxStars={5}
    		rating={this.state.totalrate}
    		starSize={15}
    		starColor={'rgb(249,174,24)'}
    		selectedStar={(rating) => {
          data.usr_rating = rating;
          RatingApi.rate(data, itemid, shopid, reviewid)
          .then(
            response => alert('rating submmited')
          )
        }}
    	/>
    )
  }

}

function mapStateToProps(state) {
  return {
    user: state.user,
    profile: state.profile,
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
)(Rating);
