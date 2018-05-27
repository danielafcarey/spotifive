import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Search from '../Search/Search';
import Signin from '../Signin/Signin';
import Tryit from '../Tryit/Tryit';
import Authorize from '../Authorize/Authorize';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Spotifive</h1>
        </header>

        <Route path='/authorize'
          component={ Authorize }
        />

        <Route 
          exact path='/'
          component={ Signin }
        />
        <Route 
          exact path='/search'
          component={ Search }
        />
        <Route 
          exact path='/tryit'
          component={ Tryit }
        />

      </div>
    );
  }
}

export default App;
