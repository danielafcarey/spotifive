import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchInput: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ searchInput: '' })
  }

  render() {
    // redirect to Tryit if artist was found (is not null)
    // if (this.props.artistError) {
    //   return <Redirect to='tryit' />
    // }
    //
    // redirect to Signin if loggedin is false
    // if (this.props.user.loggedin) {
    //   return <Redirect to='/' />
    // }

    return (
      <div className='search'>
        <form
          onSubmit={ this.handleSubmit } 
        >
          <input 
            value={ this.state.searchInput } 
            onChange={ this.handleChange }
            placeholder='Search for an artist'
          /> 
          <button>Search</button>
        </form>
        <p>1. Search for an artist</p>
        <p>2. Click TryIt to add that artists' top 5 songs to your Spotifive playlist</p>
        <p>3. See new music in your Spotifive playlist in the Spotify app</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  //user -> to check to see if loggedin is true
  //artist -> to render search error if necessary
}

const mapDispatchToProps = (dispatch) => {
 //submitUpdateArtist (saga) -> to update artist on submit
}

export {
  Search,
  mapStateToProps,
  mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
