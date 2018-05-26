import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Signin from './Signin';
import * as authorize from '../spotify/authorizeSpotify';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signin />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Signin', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Signin />);

    expect(wrapper).toMatchSnapshot();
  })

  describe('handleClick', () => {

    it('calls authorizeSpotify', () => {
      const wrapper = shallow(<Signin />);
      authorize.authorizeSpotify = jest.fn();

      wrapper.find('button').simulate('click');

      expect(authorize.authorizeSpotify).toHaveBeenCalled();
    })
  })

})
