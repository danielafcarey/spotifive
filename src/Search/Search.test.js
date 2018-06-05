import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import {
  Search,
  mapStateToProps,
  mapDispatchToProps
} from './Search';
import Trie from '../autocomplete/autocomplete';
const artistTrie = new Trie();

describe('Search', () => {
  let mockProps;
  let wrapper;

  beforeEach(() => {
    mockProps = {
      accessToken: 'a',
      user: { 
        userInfo: { userId: '1' },
        loggedIn: true
      },
      searchResults: { 
        searchResults: [],
        searchError: null
      },
      artist: { 
        artist: { artistId: '1' },
        artistError: null
      },
      submitUpdateSearch: jest.fn(),
      submitUpdateArtist: jest.fn(),
      updateArtist: jest.fn(),
      history: { push: jest.fn() }
    };
    wrapper = shallow(<Search { ...mockProps } />);
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('has a default state of searchInput', () => {
    expect(wrapper.state('searchInput')).toEqual('');
  })
  
  it('matches the snapshot if user is not logged in', () => {
    mockProps.user.loggedIn = false;
    const wrapper = shallow(<Search { ...mockProps } />);

    expect(wrapper).toMatchSnapshot()
  })

  it('matches the snapshot if there are search results', () => {
    mockProps.searchResults = { 
      searchResults: [{ name: 'hi', id: 1 }] 
    };
    const wrapper = shallow(<Search { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if there is no artist selected', () => {
    mockProps.artist.artist = {};
    const wrapper = shallow(<Search { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })

  describe('handleChange', () => {
    it('sets the state of searchInput', () => {
      const mockEvent = { target: { value: 'some input' } };
      const expected = 'some input';
      
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('searchInput')).toEqual(expected);
    })
  })

  describe('getSuggestions', () => {
    it('calls clearSuggestions', () => {
      const wrapperInst = wrapper.instance();
      wrapperInst.clearSuggestions = jest.fn();

      wrapperInst.getSuggestions();

      expect(wrapperInst.clearSuggestions).toHaveBeenCalled();
    })

    it('sets state with the suggestions if there are suggestions', () => {
      wrapper.setState({ searchInput: 'father' })
      wrapper.update();

      wrapper.instance().getSuggestions();

      expect(wrapper.state('suggestions')).toEqual(['father john misty'])
    })

    it('sets state with the searchInput if there are no suggestions and the input is more than 1', () => {
      wrapper.setState({ searchInput: 'asdflkjasdf' })
      wrapper.update();

      wrapper.instance().getSuggestions();

      expect(wrapper.state('suggestions')).toEqual(['asdflkjasdf'])
    })
  })

  describe('clearSuggestions', () => {
    it('resets the state to an empty array if there is no search input', () => {
      wrapper.setState({ searchInput: '' });
      wrapper.setState({ suggestions: ['not empty'] })
      expect(wrapper.state('suggestions')).toEqual(['not empty']);

      wrapper.instance().clearSuggestions();
      expect(wrapper.state('suggestions')).toEqual([]);
    })
  })

  describe('clearSuggestions', () => {

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

  describe('componentDidUpdate', () => {
    it('calls updateSearchError if searchResults updated', () => {
      const wrapperInst = wrapper.instance();
      wrapperInst.updateSearchError = jest.fn();
      const prevProps = { searchResults: { searchResults: [{id: 'a'}] } }

      wrapperInst.componentDidUpdate(prevProps);

      expect(wrapperInst.updateSearchError).toHaveBeenCalled();
    })
  })

  describe('updateSearchError', () => {
    it('updates searchError in state if search results are empty', () => {
      wrapper.instance().updateSearchError();

      expect(wrapper.state('searchError')).toEqual('Sorry! We didn\'t find that artist.');
    })

    it('udpates searchError in state if search results are not empty', () => {

      mockProps.searchResults.searchResults = [{ id: 1 }];
      wrapper.instance().updateSearchError();

      expect(wrapper.state('searchError')).toEqual('');
    })
  })

  describe('selectArtist', () => {
    let mockId;

    beforeEach(() => {
      mockId = 1
    })

    it('calls props.submitUpdateArtist with the correct arguments', () => {
      wrapper.instance().selectArtist('1');

      expect(mockProps.submitUpdateArtist).toHaveBeenCalledWith('1', 'a')
    })

  })

  describe('mapStateToProps', () => {
    it('returns a state object with accessToken, user, and artist', () => {
      const state = {
        accessToken: 1,
        user: { userId: 1 },
        artist: { artistId: 1 },
        searchResults: ['artist1', 'artist2'],
        fakeProp: 'do not add me'
      }
      const expected = {
        accessToken: 1,
        user: { userId: 1 },
        searchResults: ['artist1', 'artist2'],
        artist: { artistId: 1 }
      }
      const result = mapStateToProps(state);

      expect(result).toEqual(expected);
    })

  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with the correct arguments when submitUpdateSearch is invoked', () => {
      const dispatch = jest.fn();
      const mappedProps = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'SUBMIT_UPDATE_SEARCH',
        searchString: 'hi',
        accessToken: 'me'
      }
      mappedProps.submitUpdateSearch('hi', 'me');

      expect(dispatch).toHaveBeenCalledWith(mockAction)
    })

    it('calls dispatch with the correct arguments when submitUpdateArtist is invoked', () => {
      const dispatch = jest.fn();
      const mappedProps = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'SUBMIT_UPDATE_ARTIST',
        artistId: 'hi',
        accessToken: '2'
      }
      mappedProps.submitUpdateArtist('hi', '2');

      expect(dispatch).toHaveBeenCalledWith(mockAction)
    })

    it('calls dispatch with the correct arguments when submitUpdateArtist is invoked', () => {
      const dispatch = jest.fn();
      const mappedProps = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'UPDATE_ARTIST',
        artist: 'i am an artist'
      }
      mappedProps.updateArtist('i am an artist');

      expect(dispatch).toHaveBeenCalledWith(mockAction)
    })

  })

})
