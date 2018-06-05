import React from 'react';
import { shallow } from 'enzyme';
import ArtistSuggestions from './ArtistSuggestions';

describe('ArtistSuggestions', () => {

  it('matches the snapshot', () => {
    const mockProps = {
      suggestions: ['bob', 'stacy']
    }
    const wrapper = shallow(<ArtistSuggestions { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })
})
