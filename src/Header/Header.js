import React from 'react';

const Header = () => {
  const logo = require('../images/logo.png');
  return (
    <div className='Header' >
      <h1>Spotifive</h1> 
      <img src={ logo } alt='' />
    </div>
  )
}

export default Header;
