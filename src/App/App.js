import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Search from '../Search/Search';
import Home from '../Home/Home';
import Tryit from '../Tryit/Tryit';
import Authorize from '../Authorize/Authorize';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path='/authorize'
          component={ Authorize }
        />
        <Route 
          exact path='/'
          component={ Home }
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
