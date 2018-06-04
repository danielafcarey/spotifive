import React from 'react';
import { shallow } from 'enzyme';
import {
  Header,
  mapStateToProps
} from './Header';

describe('Header', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      image: 'url',
      name: 'Daniela'
    }
  })

  it('matches the snapshot if user has an image', () => {
    const wrapper = shallow(<Header { ...mockProps }/>);

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if there is no user image', () => {
    mockProps.image = null;
    const wrapper = shallow(<Header { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })

  describe('mapStateToProps', () => {

    it('returns an object with correct props', () => {
      const state = {
        user: {
          userInfo: {
            userId: 1,
            name: 'Daniela',
            image: 'i am a picture'
          }
        },
        fakeProp: 'do not add me please'
      };
      const expected = { 
        image: 'i am a picture',
        name: 'Daniela'
      };
      const result = mapStateToProps(state);

      expect(result).toEqual(expected);
    })
  })
})
