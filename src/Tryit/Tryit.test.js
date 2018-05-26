import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Tryit from './Tryit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tryit />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Tryit', () => {

  it('matches the snapshot', () => {

  })

  describe('handleClick', () => {

    it('calls fetchPlaylists with the correct arguments to check for Spotifive playlist', () => {

    })

    it('calls createPlaylist with the correct arguments if there is no Spotifive playlist', () => {

    })

    it('calls addSongs with the correct arguments', () => {

    })
  })
})
