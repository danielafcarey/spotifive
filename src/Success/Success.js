import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Success extends Component {

  handleClick = (event) => {
    const { name } = event.target;
    this.props.changeRoute(name);
  }

  render() {
    const { name, image, topTracks, loggedIn } = this.props; 

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

export default Success;
