import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Instructions from '../Instructions/Instructions';
import SearchResults from '../SearchResults/SearchResults';
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
  }

  renderInstructions = () => {
    return <Instructions /> 
  }

  renderResults = () => {
    const { searchResults } = this.props

    return <SearchResults 
      searchResults={ searchResults }
      selectArtist={ this.selectArtist }
    />
  }

  render() {
    const { loggedIn } = this.props.user;
    const { searchResults } = this.props.searchResults;
    const { artist, artistError } = this.props.artist;

    if (!loggedIn) {
      return <Redirect to='/' />
    }

    if (Object.keys(artist).length !== 0 && artistError === null) {
      return <Redirect to='/tryit' />
    }
    
    let body;

    if (searchResults.length < 1) {
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


