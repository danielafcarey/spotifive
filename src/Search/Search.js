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
import {
  string,
  shape,
  arrayOf,
  func,
  bool,
  object
} from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      searchError: ''
    }

    this.props.updateArtist({});
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { artist, artistError } = this.props.artist;
    const { searchResults } = this.props.searchResults;

    if (Object.keys(artist).length !== 0 && artistError === null) {
      this.props.history.push('/tryit');
    }

    if (prevProps.searchResults.searchResults.length !== searchResults.length) {
      this.updateSearchError();
    }

  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ searchInput: value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { submitUpdateSearch, accessToken, searchResults } = this.props;

    document.activeElement.blur();
    submitUpdateSearch(this.state.searchInput, accessToken);
    this.setState({ searchInput: '' })
  }

  updateSearchError = () => {
    const { searchResults } = this.props.searchResults;

    if (searchResults.length < 1) {
      this.setState({ searchError: 'Sorry! We didn\'t find that artist.' });
    } else {
      this.setState({ searchError: '' });
    }
  }

  selectArtist = (artistId) => {
    this.props.submitUpdateArtist(artistId, this.props.accessToken);
  }

  render() {
    const { loggedIn } = this.props.user;
    const { searchResults } = this.props;

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
          <p className='search-error' >{ this.state.searchError }</p>
          <button
            disabled={ this.state.searchInput === '' } 
          >Search</button>
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

Search.propTypes = {
  accessToken: string,
  user: shape({
    loggedIn: bool,
    userInfo: shape({
      userId: string,
      name: string,
      image: string,
      spotifive: shape({
        spotifiveId: string,
        link: string
      })
    }),
    loginError: string
  }),
  searchResults: shape({
    searchResults: arrayOf(object),
    searchError: string
  }),
  artist: shape({
    artist: object,
    artistError: string
  }),
  submitUpdateSearch: func,
  submitUpdateArtist: func,
  updateArtist: func
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


