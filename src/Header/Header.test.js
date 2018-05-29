import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  })
})
