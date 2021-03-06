import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { 
  submitUpdateSpotifive,
  updateArtist,
  updateSearchResults,
  updateSpotifiveSuccess
} from '../actions';
import {
  string,
  shape,
  bool,
  object,
  func
} from 'prop-types';
import Success from '../Success/Success';

class Tryit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    };
  }

  handleClick = () => {
    const { accessToken, submitUpdateSpotifive } = this.props;
    const { userId } = this.props.user.userInfo;
    const { spotifiveId } = this.props.user.userInfo.spotifive;
    const { topTracks } = this.props.artist.artist;

    submitUpdateSpotifive(userId, spotifiveId, topTracks, accessToken);
  }

  getTopTrackTitles = (topTracks) => {
    const check = require('../images/check-green.png');

    return topTracks.map((track, index) => {
      return (
        <div className='track' key={ track.name + index }>
          <img src={ check } alt={ track.name }/>
          <li>{ track.name }</li>
        </div>
      );
    });
  }

  changeRoute = (route) => {
    this.setState({ route });

    if (route === 'search') {
      this.props.updateArtist({});
      this.props.updateSearchResults([]);
      this.props.updateSpotifiveSuccess(false);
    }
  }

  render() {
    const { loggedIn, userInfo } = this.props.user;
    const { name, image, topTracks } = this.props.artist.artist;
    const { artist } = this.props.artist;
    const { spotifiveSuccess } = this.props;
    const { route } = this.state;
    const stockImage = require('../images/logo-grey.png');

    if (!loggedIn) {
      return <Redirect to='/' />;
    } else if (route === 'search' || Object.keys(artist).length < 1) {
      return <Redirect to='/search' />;
    } else if (route === 'spotify') {
      window.open(userInfo.spotifive.link, '_blank');
    }

    if (spotifiveSuccess) {
      const successProps = {
        name,
        image, 
        loggedIn,
        topTracks: this.getTopTrackTitles(topTracks),
        changeRoute: this.changeRoute
      }; 

      return <Success { ...successProps } />;
    }

    return (
      <div className='tryit'>
        <img 
          className='artist-image'
          src={ image === null ? stockImage : image } 
          alt={ name }/>
        <h1>{ name }</h1>
        <button
          onClick={ this.handleClick } >
          Try it!
        </button>
        <p>Click Try It to add these songs to your Spotifive playlist:</p>
        <ul>
          { topTracks ? this.getTopTrackTitles(topTracks) : null } 
        </ul>
      </div>
    );
  }
}

Tryit.propTypes = {
  accessToken: string,
  user: shape({
    loggedIn: bool,
    userInfo: shape({
      userId: string,
      name: string,
      image: string,
      spotifive: shape({
        spotifiveId: string,
        link: string
      })
    }),
    loginError: string
  }),
  artist: shape({
    artist: object,
    artistError: string
  }),
  spotifiveSuccess: bool,
  submitUpdateSpotifive: func,
  updateArtist: func,
  updateSpotifiveSuccess: func,
  updateSearchResults: func
};

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
  user: state.user,
  artist: state.artist,
  spotifiveSuccess: state.spotifiveSuccess
});

const mapDispatchToProps = (dispatch) => ({
  submitUpdateSpotifive: (userId, spotifiveId, topTracks, accessToken) => {
    return dispatch(
      submitUpdateSpotifive(userId, spotifiveId, topTracks, accessToken)
    );
  },
  updateArtist: (artist) => dispatch(updateArtist(artist)),
  updateSearchResults: (searchResults) => {
    return dispatch(updateSearchResults(searchResults));
  },
  updateSpotifiveSuccess: (success) => {
    return dispatch(updateSpotifiveSuccess(success));
  }
});

export {
  Tryit, 
  mapStateToProps,
  mapDispatchToProps
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tryit));

