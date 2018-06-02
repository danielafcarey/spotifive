import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitUpdateSpotifive } from '../actions';

class Tryit extends Component {

  handleClick = () => {
    const { 
      accessToken, 
      submitUpdateSpotifive 
    } = this.props;
    const { userId, spotifiveId } = this.props.user.userInfo;
    const { topTracks } = this.props.artist.artist;

    submitUpdateSpotifive(userId, spotifiveId, topTracks, accessToken);

    // get error from store and update in Tryit state
  }

  render() {
    const { loggedIn } = this.props.user;
    const { name, image, topTracks } = this.props.artist.artist;
    const check = require('../images/check-green.png')

    let trackTitles;
    if (topTracks) {
      trackTitles = topTracks.map(track => {
        return (
          <div className='track'>
            <img src={ check }/>
            <li>{ track.name }</li>
          </div>
        )
      })
    }

    if (!loggedIn) {
      return <Redirect to='/' />
    }

    return (
      <div className='tryit'>
        <img 
          className='artist-image'
          src={ image } 
          alt={ name }/>
        <h1>{ name }</h1>
        <button
          onClick={ this.handleClick }
        >Try it!
        </button>
        <p>Click Try It to add these songs to your Spotifive playlist:</p>
        <ul>
          { trackTitles } 
        </ul>
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
