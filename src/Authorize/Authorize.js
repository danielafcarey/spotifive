import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  updateAccessToken,
  submitUpdateUser
} from '../actions';
import { 
  getAccessToken,
  cleanUserData
} from '../cleaner.js';
import { 
  getUserData,
  getUserPlaylists
} from '../apiCalls';

class Authorize extends Component {

  componentDidMount = () => {
    const cleanAccessToken = getAccessToken(window.location.hash);
    this.props.updateAccessToken(cleanAccessToken);
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.accessToken !== this.props.accessToken) {
      this.props.submitUpdateUser(this.props.accessToken)
      // const userData = await getUserData(this.props.accessToken);
      // const userPlaylists = await getUserPlaylists(this.props.accessToken);
      // const cleanedUserData = await cleanUserData(userData, userPlaylists);
      // await this.props.updateUser(cleanedUserData);
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
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  updateAccessToken: (accessToken) => dispatch(updateAccessToken(accessToken)),
  submitUpdateUser: (accessToken) => dispatch(submitUpdateUser(accessToken))
});

export {
  Authorize,
  mapStateToProps,
  mapDispatchToProps
}
export default connect(mapStateToProps, mapDispatchToProps)(Authorize);
