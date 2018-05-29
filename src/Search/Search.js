import React, { Component } from 'react';

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
          /> 
          <button>Search</button>
        </form>
        <p>Instructions</p>
      </div>
    )
  }
}

export default Search;
