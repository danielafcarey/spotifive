import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccessToken } from '../cleaner.js';
import { updateAccessToken } from '../actions';

class Authorize extends Component {

  componentDidMount = () => {
    const cleanAccessToken = getAccessToken(window.location.hash);

    this.props.updateAccessToken(cleanAccessToken);
  }

  render() {
    return (
      <div className='authorize' >
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAccessToken: (accessToken) => dispatch(updateAccessToken(accessToken))
})

export {
  Authorize,
  mapDispatchToProps
}
export default connect(null, mapDispatchToProps)(Authorize);
