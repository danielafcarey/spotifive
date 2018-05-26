import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Search from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Search', () => {

  it('matches the snapshot', () => {

  })

  it('has a default state of searchInput', () => {

  })

  describe('handleChange', () => {

    it('sets the state of searchInput', () => {

    })

  })

  describe('handleSubmit', () => {

    it('gets the artist info and top song ids', () => {
      // 2 fetch calls - one to get artist id and one to get top 5 songs
    })

    it('updates the store with new artist info', () => {

    })

  })

  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with the correct arguments', () => {

    })

  })

})
