import React, { Component } from 'react';

class Home extends Component {

  handleClick = () => {
    // window.location = 'http://localhost:8888/login';
    window.location = 'https://try-spotifive-backend.firebaseapp.com/login';
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
