import React from 'react';

const Instructions = () => {
  const search = require('../images/search.png');
  const click = require('../images/click.png');
  const listen = require('../images/listen.png'); 

  return (
    <div className='Instructions'>
      <div className='instruction'>
        <img src={ search } />
        <p>Search for an artist</p>
      </div>
      <div className='instruction'>
        <img src={ click }/>
        <p>Click TryIt to add that artists' top 5 songs to your Spotifive playlist</p>
      </div>
      <div className='instruction'>
        <img src={ listen }/>
        <p>See new music in your Spotifive playlist in the Spotify app</p>
      </div>
    </div>
  )
}

export default Instructions;
