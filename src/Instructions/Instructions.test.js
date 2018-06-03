import React from 'react';
import { shallow } from 'enzyme';
import Instructions from './Instructions';

describe('Instructions', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Instructions />);

    expect(wrapper).toMatchSnapshot();
  })
})
