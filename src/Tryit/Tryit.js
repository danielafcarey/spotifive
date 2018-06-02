import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUpdateSpotifiveId } from '../actions';
import * as apiCalls from '../apiCalls';

class Tryit extends Component {

  handleClick = () => {
    const { 
      accessToken, 
      submitUpdateSpotifiveId 
    } = this.props;
    const { userId, spotifiveId } = this.props.user.userInfo
    const { topTracks } = this.props.artist.artist;

    if (spotifiveId === null) {
      submitUpdateSpotifiveId(userId, accessToken);
    }

    //apiCalls.addTracks(userId, spotifiveId, topTracks, accessToken)
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
  submitUpdateSpotifiveId: (userId, accessToken) => dispatch(submitUpdateSpotifiveId(userId, accessToken))
})

export {
  Tryit, 
  mapStateToProps,
  mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Tryit);;
