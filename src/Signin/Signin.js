import React from 'react';
import { authorizeSpotify } from '../spotify/authorizeSpotify';

const Signin = () => {

  return (
    <div className='signin'>
      <p>
        Spotifive helps you discover new music 
        by generating a playlist of new music to try 
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

export default Signin;
