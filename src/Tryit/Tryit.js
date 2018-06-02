import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitUpdateSpotifive } from '../actions';

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

    // get error from store and update in Tryit state
  }

  render() {
    const { loggedIn } = this.props.user;
    if (!loggedIn) {
      return <Redirect to='/' />
    }

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
