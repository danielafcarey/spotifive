import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUpdateSpotifive } from '../actions';
import * as apiCalls from '../apiCalls';

class Tryit extends Component {

  handleClick = async () => {
    const { 
      accessToken, 
      submitUpdateSpotifive 
    } = this.props;
    const { userId, spotifiveId } = this.props.user.userInfo;
    const { topTracks } = this.props.artist.artist;
    console.log(topTracks)

    const addTracksResponse = await submitUpdateSpotifive(userId, spotifiveId, topTracks, accessToken);
    console.log(addTracksResponse);

    // change saga to handle conditional
    // use response to update error if necessary
  }

  render() {
    return (
      <div className='tryit'>
        <button
          onClick={ this.handleClick }
        >Add Spotifive</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
  user: state.user,
  artist: state.artist
})

const mapDispatchToProps = (dispatch) => ({
  submitUpdateSpotifive: (userId, spotifiveId, topTracks, accessToken) => {
    dispatch(submitUpdateSpotifive(userId, spotifiveId, topTracks, accessToken))
  }
})

export {
  Tryit, 
  mapStateToProps,
  mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Tryit);;
