import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import * as cleaner from '../cleaner';
import * as apiCalls from '../apiCalls';
import { updateAccessToken } from '../actions';
import {
  Authorize,
  mapStateToProps,
  mapDispatchToProps
} from './Authorize';
cleaner.getAccessToken = jest.fn().mockImplementation(() => 'cleanedAccessToken')

describe('Authorize', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      accessToken: '',
      updateAccessToken: jest.fn(),
    }
    window.location = { hash: 'string' }
    wrapper = shallow(<Authorize { ...mockProps }/>);
  }) 

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('componentDidMount', () => {

    it('calls updateAccessToken with the correct argumenst', () => {
      wrapper = shallow(<Authorize { ...mockProps }/>);
      const expected = cleaner.getAccessToken();

      expect(wrapper.instance().props.updateAccessToken).toHaveBeenCalledWith(expected);
    })
  })

  describe('componentDidUpdate', () => {

    it('calls apiCalls.getUserData with correct args if props.accessToken has updated', () => {
      apiCalls.getUserData = jest.fn();
      const wrapperInst = wrapper.instance();
      wrapper.setProps({ accessToken: 'hi' });

      expect(apiCalls.getUserData).toHaveBeenCalledWith(wrapperInst.props.accessToken);
    })

    it('does not call apiCalls.getUserData if props.accessToken has not updated', () => {
      apiCalls.getUserData = jest.fn();
      const wrapperInst = wrapper.instance();
      wrapper.update();

      expect(apiCalls.getUserData.mock.calls.length).toEqual(0);

    })
  })

  describe('mapStateToProps', () => {

    it('returns an object with an accessToken', () => {
      const mockState = {
        accessToken: 'iamaccesstoken',
        fakeProp: 'pleasedontaddme'
      } 
      const expected = { accessToken: 'iamaccesstoken' }
      const result = mapStateToProps(mockState);

      expect(result).toEqual(expected);
    })
  })

  describe('mapDispatchToProps', () => {

    it('calls dispatch with the correct arguments', () => {
      const dispatch = jest.fn();
      const mockAccessToken = 'token';
      const mockAction = {
        type: 'UPDATE_ACCESS_TOKEN',
        accessToken: mockAccessToken
      }
      const mappedProps = mapDispatchToProps(dispatch);

      mappedProps.updateAccessToken(mockAction.accessToken);

      expect(dispatch).toHaveBeenCalledWith(mockAction);
    })
  })

})

