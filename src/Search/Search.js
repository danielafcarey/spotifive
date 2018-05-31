import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArtistCard from '../ArtistCard/ArtistCard';
import {
  submitUpdateSearch,
  submitUpdateArtist
} from '../actions';

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
    this.props.submitUpdateSearch(this.state.searchInput, this.props.accessToken);
    this.setState({ searchInput: '' })
  }

  selectArtist = (artistId) => {
    this.props.submitUpdateArtist(artistId, this.props.accessToken);
    //redirect to TryIt if successful (artist was updated in store)
  }

  renderInstructions = () => {
    return (
      <div>
        <p>1. Search for an artist</p>
        <p>2. Click TryIt to add that artists' top 5 songs to your Spotifive playlist</p>
        <p>3. See new music in your Spotifive playlist in the Spotify app</p>
      </div>
    )
  }

  renderResults = () => {
    const listOfResults = this.props.searchResults.searchResults.map((result, i) => {
      return (
        <ArtistCard 
          name={ result.name } 
          id={ result.id }
          selectArtist={ this.selectArtist } 
          key={`artistKey${i}`}
        />     
      )
    })

    return (
      <div>
        <p>Select an artist: </p>
        <ul>
          { listOfResults }
        </ul>
      </div>
    )
  }

  render() {
    // redirect to Signin if loggedin is false
    // if (this.props.user.loggedin) {
    //   return <Redirect to='/' />
    // }
    
    let body;
    const lengthOfSearchResults = this.props.searchResults.searchResults.length;

    if (lengthOfSearchResults < 1) {
      body = this.renderInstructions();
    } else {
      body = this.renderResults();
    }

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
        {body}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.accessToken,
  user: state.user,
  searchResults: state.searchResults,
  artist: state.artist
})

const mapDispatchToProps = (dispatch) => ({
  submitUpdateSearch: (searchString, accessToken) => dispatch(submitUpdateSearch(searchString, accessToken)),
  submitUpdateArtist: (artistId, accessToken) => dispatch(submitUpdateArtist(artistId, accessToken)) 
})

export {
  Search,
  mapStateToProps,
  mapDispatchToProps
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);


