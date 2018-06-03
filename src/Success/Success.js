import React from 'react';
import { Redirect } from 'react-router-dom';

const Success = (props) => {
  // button to go to Spotifive on Spotify
  
  const { name, image, topTracks, loggedIn } = props; 

  if (!loggedIn) {
    return <Redirect to='/' />;
  }

  return (
    <div className='success' >
      <img 
        className='artist-image'
        src={ image } 
        alt={ name } />
      <h1>Success!</h1>
      <p>{ `${name} has been added to your Spotifive playlist` }</p>
      <button
        onClick={ () => <Redirect to='/search' /> } >
        Search for another artist
      </button>
    </div>  
  )
}

const redirect = () => {

}

export default Success;
