import React, { Component } from 'react';
import { authorizeSpotify } from '../spotify/authorizeSpotify';

class Home extends Component {

  handleClick = () => {
    authorizeSpotify();
  }

  render() {
    return (
      <div className='signin'>
        <p>
          Spotifive helps you discover new music 
          by generating a playlist of music to try 
          based on the artists you choose.
        </p>
        <p>To begin, sign in with Spotify:</p>
        <button
          onClick={ this.handleClick } 
        >Sign in with Spotify</button>
      </div>
    );

  }
};

export default Home;
