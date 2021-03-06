import React from 'react';
import { shallow } from 'enzyme';
import ArtistCard from './ArtistCard';

describe('ArtistCard', () => {

  it('matches the snapshot if the image is null', () => {
    const mockProps = {
      name: 'Daniela',
      id: 'abc',
      image: null,
      selectArtist: jest.fn()
    }
    const wrapper = shallow(<ArtistCard { ...mockProps }/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if the image is not null', () => {
    const mockProps = {
      name: 'Daniela',
      id: 'abc',
      image: 'image',
      selectArtist: jest.fn()
    }
    const wrapper = shallow(<ArtistCard { ...mockProps }/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('calls props.selectArtist with correct args on click', () => {
    const mockProps = {
      name: 'Daniela',
      id: 'abc',
      image: 'image',
      selectArtist: jest.fn()
    }
    const wrapper = shallow(<ArtistCard { ...mockProps  } />);

    wrapper.find('div').simulate('click');

    expect(mockProps.selectArtist).toHaveBeenCalledWith(mockProps.id);
  })
})
