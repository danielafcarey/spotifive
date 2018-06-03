import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  const logo = require('../images/logo.png');

  return (
    <div className='Header' >
      <img 
        className='profile-photo'
        src={ props.image ? props.image : '' } 
        alt='' />
      <h1>Spotifive</h1> 
      <img 
        className='logo'
        src={ logo } 
        alt='logo' />
    </div>
  )
};

const mapStateToProps = (state) => ({
  image: state.user.userInfo.image
});

export default connect(mapStateToProps)(Header);
