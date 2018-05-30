import React from 'react';
import { shallow } from 'enzyme';
import ArtistCard from './ArtistCard';

describe('ArtistCard', () => {

  it('should match the snapshot', () => {
    const mockProps = {
      name: 'Daniela',
      id: 'abc',
      selectArtist: jest.fn()
    }
    const wrapper = shallow(<ArtistCard { ...mockProps }/>);

    expect(wrapper).toMatchSnapshot();
  })
})
