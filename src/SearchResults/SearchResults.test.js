import React from 'react';
import { shallow } from 'enzyme';
import SearchResults from './SearchResults';

describe('SearchResults', () => {
  let mockProps;
  
  beforeEach(() => {
    mockProps = {
      selectArtist: jest.fn(),
      searchResults: {
        searchResults: [],
        searchError: null
      }
    }
  })

  it('matches the snapshot if there are no search results', () => {
    const wrapper = shallow(<SearchResults { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if there are search results', () => {
    mockProps.searchResults.searchResults = ['result'];
    const wrapper = shallow(<SearchResults { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })
})
