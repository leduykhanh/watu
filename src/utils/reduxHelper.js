import {bindActionCreators} from 'redux'

export function mapStateToProps(state) {
  return {
    user: state.user, //
    profile: state.profile,
    device: state.device,
    home: state.home,
    location: state.location,
    cart: state.cart,
    luckydraw: state.luckydraw,
    notification: state.notification
  }
}
export function mapDispatchToProps(o) {
  const {actions, locationActions, cartActions, userActions} = o
  return function(dispatch) {
    const rs = {
      dispatch
    }
    if (actions) 
      rs.actions = bindActionCreators(actions, dispatch)
    if (locationActions) 
      rs.locationActions = bindActionCreators(locationActions, dispatch)
    if (cartActions) 
      rs.cartActions = bindActionCreators(cartActions, dispatch)
    if (userActions) 
      rs.userActions = bindActionCreators(userActions, dispatch)
    return rs
  }
}
