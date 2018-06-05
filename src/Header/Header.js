import React from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';

const Header = (props) => {
  const logo = require('../images/logo.png');

  return (
    <div className='Header' >
      <img 
        className='profile-photo'
        src={ props.image !== null ? props.image : props.name } 
        alt='' />
      <h1>Spotifive</h1> 
      <img 
        className='logo'
        src={ logo } 
        alt='logo' />
    </div>
  );
};

const mapStateToProps = (state) => ({
  image: state.user.userInfo.image,
  name: state.user.userInfo.name
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
