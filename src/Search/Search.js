import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import Instructions from '../Instructions/Instructions';
import SearchResults from '../SearchResults/SearchResults';
import {
  submitUpdateSearch,
  submitUpdateArtist,
  updateArtist
} from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }

    this.props.updateArtist({});
  }

  componentDidUpdate = () => {
    const { artist, artistError } = this.props.artist;

    if (Object.keys(artist).length !== 0 && artistError === null) {
      this.props.history.push('/tryit');
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

  render() {
    const { loggedIn } = this.props.user;
    const { searchResults } = this.props;
    const { artist, artistError } = this.props.artist;

    if (!loggedIn) {
      return <Redirect to='/' />
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
        { searchResults.searchResults.length < 1 ?
            <Instructions /> :
            <SearchResults 
              searchResults={ searchResults }
              selectArtist={ this.selectArtist }
            />
        }
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
  submitUpdateArtist: (artistId, accessToken) => dispatch(submitUpdateArtist(artistId, accessToken)), 
  updateArtist: (artist) => dispatch(updateArtist(artist))
})

export {
  Search,
  mapStateToProps,
  mapDispatchToProps
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));


