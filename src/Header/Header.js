import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

const Header = ({ image, name }) => {
  const logo = require('../images/logo.png');

  let userIcon;
  if (image !== null) {
    userIcon = <img 
      className='profile-photo'
      src={ image } 
      alt=''
    />;
  } else {
    userIcon = <h4 className='user-name'>{ name }</h4>;
  }

  return (
    <div className='Header' >
      { userIcon }
      <h1>Spotifive</h1> 
      <img 
        className='logo'
        src={ logo } 
        alt='logo' />
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  image: user.userInfo.image,
  name: user.userInfo.name
});

Header.propTypes = {
  name: string,
  image: string
};

export {
  Header,
  mapStateToProps
};

export default connect(mapStateToProps)(Header);
