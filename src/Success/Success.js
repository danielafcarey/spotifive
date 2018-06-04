import React, { Component } from 'react';
import { bool, string, func } from 'prop-types';
import { Redirect } from 'react-router-dom';

class Success extends Component {

  handleClick = (event) => {
    const { name } = event.target;
    this.props.changeRoute(name);
  }

  render() {
    const { name, image, loggedIn } = this.props; 

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
          onClick={ this.handleClick } 
          name='search'>
          Search for another artist
        </button>
        <button
          onClick={ this.handleClick } 
          name='spotify'>
          Go to Spotify 
        </button>
      </div>  
    )
  }
}

Success.propTypes = {
  changeRoute: func,
  name: string,
  image: string,
  loggedIn: bool
}

export default Success;
