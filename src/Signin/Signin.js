import React from 'react';
import { authorizeSpotify } from '../spotify/authorizeSpotify';

const Home = () => {

  return (
    <div className='signin'>
      <p>
        Spotifive helps you discover new music 
        by generating a playlist of music to try 
        based on the artists you choose.
      </p>
      <p>To begin, sign in with Spotify:</p>
      <button
        onClick={ handleClick } 
      >Sign in with Spotify</button>
    </div>
  );
};

const handleClick = () => {
  authorizeSpotify();
};

export default Home;
