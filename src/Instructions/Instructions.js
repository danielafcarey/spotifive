import React from 'react';

const Instructions = () => {
  const search = require('../images/search.png');
  const click = require('../images/click.png');
  const listen = require('../images/listen.png'); 

  return (
    <div className='Instructions'>
      <div className='instruction'>
        <img src={ search } alt='Search'/>
        <p>Search for an artist</p>
      </div>
      <div className='instruction'>
        <img src={ click } alt='Click'/>
        <p>
          Click TryIt to add that artists&apos; top 5 songs 
          to your Spotifive playlist
        </p>
      </div>
      <div className='instruction'>
        <img src={ listen } alt='Listen'/>
        <p>
          See new music in your Spotifive playlist in the Spotify app
        </p>
      </div>
    </div>
  );
};

export default Instructions;
