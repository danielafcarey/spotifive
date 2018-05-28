import * as sagas from './index';
import * as actions from '../actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as apiCalls from '../apiCalls';
import * as cleaners from '../cleaner';

describe('sagas', () => {

  describe('listenForSubmitUpdateUser', () => {
    let iterator;

    beforeAll(() => {
      iterator = sagas.listenForSubmitUpdateUser();
    })

    it('should takeLatest SUBMIT_UPDATE_USER', () => {
      const value = iterator.next().value;
      const expected = takeLatest('SUBMIT_UPDATE_USER', sagas.submitUpdateUser);

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    }) 
  })

  describe('submitUpdateUser', () => {
    let iterator;
    let mockAction;
    let mockRawUserData;
    let mockRawUserPlaylists;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_USER',
        accessToken: 'itme'
      }
      iterator = sagas.submitUpdateUser(mockAction);
      mockRawUserData = {
        userId: 1
      }
      mockRawUserPlaylists = ['aPlaylist', 'anotherOne']
    })

    it('yields call with the correct getUserData apiCall and arguments', () => {
      const value = iterator.next().value;
      const expected = call(apiCalls.getUserData, mockAction.accessToken);

      expect(value).toEqual(expected);
    })

    it('yields call with the correct getUserPlaylists apiCall and args', () => {
      
      const value = iterator.next(mockRawUserData).value;
      const expected = call(apiCalls.getUserPlaylists, mockAction.accessToken);

      expect(value).toEqual(expected);
    })

    it('yields call with the correct data cleaner and args', () => {
      
      const value = iterator.next(mockRawUserPlaylists).value;
      const expected = call(cleaners.cleanUserData, mockRawUserData, mockRawUserPlaylists)

      expect(value).toEqual(expected);
    })

    it('yields put with updateUser action', () => {
      const mockCleanedUser = {
        userId: 1
      }
      const value = iterator.next(mockCleanedUser).value;
      const expected = put(actions.updateUser(mockCleanedUser));

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })

  })

  describe('submitUpdateUser error', () => {
    let iterator;
    let mockAction;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_USER',
        accessToken: 'badaccesstoken'
      }
      iterator = sagas.submitUpdateUser(mockAction);
      iterator.next();
    })
    it('yields put with updateUserError action if there is an error', () => {
      const expected = put(actions.updateUserError('i am bad'));
      const value = iterator.throw(Error('i am bad')).value;

      expect(value).toEqual(expected);
    })

  })
})
