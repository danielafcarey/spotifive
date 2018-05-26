import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Signin from './Signin';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signin />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Signin', () => {

  it('matches the snapshot', () => {

  })

  it('has a default state of email and password', () => {

  })

  describe('handleChange', () => {

    it('updates the state on change in the email input', () => {

    })

    it('updates the state on change in the password input', () => {

    })

  })

  describe('handleSubmit', () => {
    
    it('makes an api call to get the userId', () => {

    })

    it('sends the userId to state via updateCurrentUser', () => {

    })

    it('shows an error message if signin was unsuccessful', () => {

    })

  })

  describe('mapDispatchToProps', () => {

    it('calls dispatch with the correct arguments', () => {

    })

  })


})
