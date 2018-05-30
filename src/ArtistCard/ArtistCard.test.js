import React from 'react';
import { shallow } from 'enzyme';

describe('ArtistCard', () => {

  it('should match the snapshot', () => {
    const mockProps = {
      name: 'Daniela'
    }
    const wrapper = shallow(<ArtistCard { ...mockProps }/>);

    expect(wrapper).toMatchSnapshot();
  })
})
