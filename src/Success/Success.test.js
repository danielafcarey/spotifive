import React from 'react';
import { shallow } from 'enzyme';
import Success from './Success';

describe('Success', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      name: 'The Rock',
      image: 'the rocks face',
      topTracks: ['i am rock', 'i love rock'],
      loggedIn: true
    }
  })

  it('matches the snapshot', () => {
    const wrapper = shallow(<Success { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })

})
