import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { 
  submitUpdateSpotifive,
  updateArtist,
  updateSearchResults
} from '../actions';
import Success from '../Success/Success';

class Tryit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    }
  }

  handleClick = () => {
    const { 
      accessToken, 
      submitUpdateSpotifive 
    } = this.props;
    const { userId, spotifiveId } = this.props.user.userInfo;
    const { topTracks } = this.props.artist.artist;

    submitUpdateSpotifive(userId, spotifiveId, topTracks, accessToken);
  }

  getTopTrackTitles = (topTracks) => {
    const check = require('../images/check-green.png')

    return topTracks.map((track, i) => {
      return (
        <div className='track' key={ track.name + i }>
          <img src={ check } alt={ track.name }/>
          <li>{ track.name }</li>
        </div>
      )
    })
  }

  changeRoute = (route) => {
    this.props.updateArtist({});
    this.props.updateSearchResults([])
    this.setState({ route });
  }

  render() {
    const { loggedIn } = this.props.user;
    const { name, image, topTracks } = this.props.artist.artist;
    const { spotifiveSuccess } = this.props;
    const { route } = this.state;

    if (!loggedIn) {
      return <Redirect to='/' />;
    } else if (route === 'search') {
      return <Redirect to='/search' />;
    } else if (route === 'spotify') {
      console.log('go to spotify');
    }

    if (spotifiveSuccess) {
      const successProps = {
        name,
        image, 
        loggedIn,
        topTracks: this.getTopTrackTitles(topTracks),
        changeRoute: this.changeRoute
      } 

      return <Success { ...successProps } />;
    }

    return (
      <div className='tryit'>
        <img 
          className='artist-image'
          src={ image } 
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
    )
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
  user: state.user,
  artist: state.artist,
  spotifiveSuccess: state.spotifiveSuccess
})

const mapDispatchToProps = (dispatch) => ({
  submitUpdateSpotifive: (userId, spotifiveId, topTracks, accessToken) => {
    dispatch(submitUpdateSpotifive(userId, spotifiveId, topTracks, accessToken))
  },
  updateArtist: (artist) => dispatch(updateArtist(artist)),
  updateSearchResults: (searchResults) => dispatch(updateSearchResults(searchResults))
})

export {
  Tryit, 
  mapStateToProps,
  mapDispatchToProps
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tryit));
