import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { 
  Tryit,
  mapStateToProps,
  mapDispatchToProps
} from './Tryit';

describe('Tryit', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {

    };
    wrapper = shallow(<Tryit { ...mockProps } />);
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('handleClick', () => {

    it('calls fetchPlaylists with the correct arguments to check for Spotifive playlist', () => {

    })

    it('calls createPlaylist with the correct arguments if there is no Spotifive playlist', () => {

    })

    it('calls addSongs with the correct arguments', () => {

    })

  })

  describe('mapStateToProps', () => {
    
    it('returns a state object with the correct state', () => {
      const expected = {
        accessToken: 'hi',
        artist: { 
          artist: {
            artistId: '1',
            topTracks: []
          },
          artistError: null
        },
        user: {
          loggedIn: true,
          userInfo: {}
        },
      }
      const mockState = { ...expected, fakeState: 'do not add me' }
      const result = mapStateToProps(mockState);

      expect(result).toEqual(expected);
    })

  })

  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with the correct arguments', () => {
      const dispatch = jest.fn();
      const mappedProps = mapDispatchToProps(dispatch);
      const mockAction = {
        type: 'SUBMIT_UPDATE_SPOTIFIVE',
        userId: 2,
        spotifiveId: 3,
        topTracks: [],
        accessToken: 1
      }
      const expected = mockAction;

      mappedProps.submitUpdateSpotifive(2, 3, [], 1);
      
      expect(dispatch).toHaveBeenCalledWith(expected);
    })
  })

})
