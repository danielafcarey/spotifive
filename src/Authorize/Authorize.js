import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAccessToken } from '../cleaner.js';
import { updateAccessToken } from '../actions';
import { getUserData } from '../apiCalls';

class Authorize extends Component {

  componentDidMount = () => {
    const cleanAccessToken = getAccessToken(window.location.hash);

    this.props.updateAccessToken(cleanAccessToken);
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.accessToken !== this.props.accessToken) {
      const userData = await getUserData(this.props.accessToken);
      console.log(userData);
      // get user playlists
      // cleanUserData(userData, userPlaylists) => userId, name, hasSpotifive, image
    }
  }

  render() {
    return (
      <div className='authorize' >
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
});

const mapDispatchToProps = (dispatch) => ({
  updateAccessToken: (accessToken) => dispatch(updateAccessToken(accessToken))
});

export {
  Authorize,
  mapStateToProps,
  mapDispatchToProps
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
