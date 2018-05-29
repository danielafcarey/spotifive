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

const cleanedUserData = {
  userId: 1,
  name: 'Daniela',
  image: 'imageurl',
  hasSpotifive: false
}
cleaner.getAccessToken = jest.fn().mockImplementation(() => 'cleanedAccessToken')
cleaner.cleanUserData = jest.fn().mockImplementation(() => cleanedUserData)

describe('Authorize', () => {
  let wrapper;
  let mockProps;

  beforeEach(() => {
    mockProps = {
      accessToken: '',
      user: { userId: 1 },
      updateAccessToken: jest.fn(),
      submitUpdateUser: jest.fn()
    }
    window.location = { hash: 'string' }
    wrapper = shallow(<Authorize { ...mockProps }/>);
  }) 

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if props.user.loggedIn is true', () => {
    mockProps.user.loggedIn = true;
    wrapper = shallow(<Authorize { ...mockProps } />)

    expect(wrapper).toMatchSnapshot();
  })

  describe('componentDidUpdate', () => {
    
    it('calls props.submitUpdateUser if accessToken has been udpated', () => {
      const wrapperInst = wrapper.instance();
      const prevProps = {
        accessToken: '1'
      }
      wrapperInst.componentDidUpdate(prevProps);

      expect(wrapperInst.props.submitUpdateUser).toHaveBeenCalledWith('');
    })

    it('does not call props.submitUpdateUser if accessToken has not updated', () => {
      const wrapperInst = wrapper.instance();
      const prevProps = {
        accessToken: ''
      }
      wrapperInst.componentDidUpdate(prevProps);

      expect(wrapperInst.props.submitUpdateUser.mock.calls.length).toEqual(0);
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

    it('returns an object with a user', () => {
      const mockState = {
        user: { 
          userInfo: { userId: 1 } 
        },
        fakeProp: 'pleasedontaddme'
      } 
      const expected = { user: mockState.user }
      const result = mapStateToProps(mockState);

      expect(result).toEqual(expected);
    })

  })

  describe('mapDispatchToProps', () => {

    it('calls dispatch with the correct arguments for UPDATE_ACCESS_TOKEN', () => {
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

    it('calls dispatch with the correct arguments for SUBMIT_UPDATE_USER', () => {
      const dispatch = jest.fn();
      const mockAccessToken = 'token';
      const mockAction = {
        type: 'SUBMIT_UPDATE_USER',
        accessToken: mockAccessToken
      }
      const mappedProps = mapDispatchToProps(dispatch);

      mappedProps.submitUpdateUser(mockAction.accessToken);

      expect(dispatch).toHaveBeenCalledWith(mockAction);
    })

  })

})

