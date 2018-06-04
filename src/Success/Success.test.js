import React from 'react';
import { shallow } from 'enzyme';
import Success from './Success';

describe('Success', () => {
  let mockProps;

  beforeEach(() => {
    mockProps = {
      name: 'The Rock',
      image: 'the rocks face',
      topTracks: ['i am rock', 'i love rock'],
      loggedIn: true,
      changeRoute: jest.fn()
    }
  })

  it('matches the snapshot', () => {
    const wrapper = shallow(<Success { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if user is not loggedIn', () => {
    mockProps.loggedIn = false;
    const wrapper = shallow(<Success { ...mockProps } />);

    expect(wrapper).toMatchSnapshot();
  })

  it('calls props.changeRoute with the correct args on click', () => {
    const mockEvent = { target: { name: 'search' } };
    const expected = 'search';
    const wrapper = shallow(<Success { ...mockProps } />);
    const wrapperInst = wrapper.instance();

    wrapperInst.handleClick(mockEvent);

    expect(wrapperInst.props.changeRoute).toHaveBeenCalledWith(expected);
  })

})
