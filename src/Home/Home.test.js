import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Home from './Home';
import * as authorize from '../spotify/authorizeSpotify';

describe('Home', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  })

})
