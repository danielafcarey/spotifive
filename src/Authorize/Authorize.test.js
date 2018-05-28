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

  describe('componentDidMount', () => {

    it('calls updateAccessToken with the correct argumenst', () => {
      wrapper = shallow(<Authorize { ...mockProps }/>);
      const expected = cleaner.getAccessToken();

      expect(wrapper.instance().props.updateAccessToken).toHaveBeenCalledWith(expected);
    })
  })

  describe('componentDidUpdate', () => {
  
    //   apiCalls.getUserData = jest.fn();
    //   apiCalls.getUserPlaylists = jest.fn();
    //   const wrapperInst = wrapper.instance();
    //   wrapper.setProps({ accessToken: 'hi' });

    //   expect(apiCalls.getUserData).toHaveBeenCalledWith(wrapperInst.props.accessToken);
    // })

    // it('calls apiCalls.getUserPlaylists with correct args if props.accessToken has updated', async () => {
    //   apiCalls.getUserData = jest.fn();
    //   apiCalls.getUserPlaylists = jest.fn();
    //   const wrapperInst = wrapper.instance();
    //   wrapper.setProps({ accessToken: 'hi' });
    //   await wrapper.update();

    //   expect(apiCalls.getUserPlaylists).toHaveBeenCalledWith(wrapperInst.props.accessToken);
    // })

    // it.skip('calls cleaner.cleanUserData with the correct props if props.accessToken has updated', async () => {
    //   apiCalls.getUserData = jest.fn().mockImplementation(() => 'mockUserData');
    //   apiCalls.getUserPlaylists = jest.fn().mockImplementation(() => 'mockPlaylists');
    //   const wrapperInst = wrapper.instance();
    //   wrapper.setProps({ accessToken: 'hi' });
    //   await wrapper.update();

    //   expect(cleaner.cleanUserData).toHaveBeenCalledWith('mockUserData', 'mockPlaylists');
    // })

    // it.skip('calls props.updateUser with the correct args if props.accessToken has updated', async () => {
    //   apiCalls.getUserData = jest.fn().mockImplementation(() => 'mockUserData');
    //   apiCalls.getUserPlaylists = jest.fn().mockImplementation(() => 'mockPlaylists');
    //   const wrapperInst = wrapper.instance();
    //   wrapper.setProps({ accessToken: 'hi' });
    //   await wrapper.update();

    //   expect(wrapperInst.props.updateUser).toHaveBeenCalledWith(cleanedUserData);
    // })


    // it('updates the error if props.accessToken has not updated', () => {

    // })

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

