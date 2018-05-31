import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import {
  Search,
  mapStateToProps,
  mapDispatchToProps
} from './Search';


describe('Search', () => {
  let mockProps;
  let wrapper;

  beforeEach(() => {
    mockProps = {
      accessToken: 'a',
      user: { userId: 1 },
      searchResults: { 
        searchResults: [] 
      },
      artist: { artistId: 1 },
      submitUpdateSearch: jest.fn(),
      submitUpdateArtist: jest.fn()
    }
    wrapper = shallow(<Search { ...mockProps } />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if there are search result', () => {
    mockProps.searchResults = { 
      searchResults: [
        {
          name: 'hi',
          id: 1
        }
      ] 
    };
    const wrapper = shallow(<Search { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })

  it('has a default state of searchInput', () => {
    expect(wrapper.state('searchInput')).toEqual('');
  })

  describe('handleChange', () => {

    it('sets the state of searchInput', () => {
      const mockEvent = { target: { value: 'some input' } };
      const expected = 'some input';
      
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('searchInput')).toEqual(expected);
    })

  })

  describe('handleSubmit', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { preventDefault: () => {} }
    })

    it('calls props.submitUpdateSearch with the correct arguments', () => {
      wrapper.setState({ searchInput: 'hi' })
      const wrapperInst = wrapper.instance();
      wrapperInst.handleSubmit(mockEvent);

      expect(wrapperInst.props.submitUpdateSearch).toHaveBeenCalledWith('hi', 'a');
    })

    it('resets the state to an empty string', () => {
      wrapper.instance().handleSubmit;

      expect(wrapper.state('searchInput')).toEqual('');
    })

  })

  describe('selectArtist', () => {
    let mockId;

    beforeEach(() => {
      mockId = 1
    })

    it('calls props.submitUpdateArtist with the correct arguments', () => {
      
    })

  })

  describe('mapStateToProps', () => {

    it('returns a state object with accessToken, user, and artist', () => {
      const state = {
        accessToken: 1,
        user: { userId: 1 },
        artist: { artistId: 1 },
        fakeProp: 'do not add me'
      }
      const expected = {
        accessToken: 1,
        user: { userId: 1 },
        artist: { artistId: 1 }
      }
      const result = mapStateToProps(state);

      expect(result).toEqual(expected);
    })

  })

  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with the correct arguments', () => {
      const dispatch = jest.fn();
      const mappedProps = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'SUBMIT_UPDATE_SEARCH',
        searchString: 'hi'
      }
      mappedProps.submitUpdateSearch(mockAction.searchString);

      expect(dispatch).toHaveBeenCalledWith(mockAction)
    })

  })

})
