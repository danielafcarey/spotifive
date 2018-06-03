import React from 'react';
import { Redirect } from 'react-router-dom';

const Success = (props) => {
  // if logged out, redirect to signin
  // button to go to Spotifive on Spotify
  
  const { name, image, topTracks, loggedIn } = props; 

  return (
    <div className='success' >
      <h1>Success!</h1>
      <img 
        className='artist-image'
        src={ image } 
        alt={ name } />
      <button
        onClick={ () => <Redirect to='/search' /> } >
        Search for another artist
      </button>
      <p>{ `${name} has been added to your Spotifive playlist` }</p>
      <ul>
        { topTracks } 
      </ul>
    </div>  
  )
}

export default Success;
