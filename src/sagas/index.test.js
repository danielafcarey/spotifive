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

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })

  })


  describe('listenForSubmitUpdateSearch', () => {
    let iterator;

    beforeAll(() => {
      iterator = sagas.listenForSubmitUpdateSearch();
    })

    it('should takeLatest SUBMIT_UPDATE_SEARCH', () => {
      const value = iterator.next().value;
      const expected = takeLatest('SUBMIT_UPDATE_SEARCH', sagas.submitUpdateSearch)

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })
  })


  describe('submitUpdateSearch', () => {
    let iterator;
    let mockAction;
    let mockSearchResults;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_SEARCH',
        searchString: 'an artist',
        accessToken: '1'
      }
      iterator = sagas.submitUpdateSearch(mockAction);
      mockSearchResults = [{ artistId: 'artist1' }]
    })

    it('yields call with apiCalls.getSearchResults and correct arguments', () => {
      const value = iterator.next().value;
      const expected = call(apiCalls.getSearchResults, mockAction.searchString, mockAction.accessToken);

      expect(value).toEqual(expected);
    })

    it('yields call with cleaners.cleanSearchResults and correct arguments', () => {
      const value = iterator.next(mockSearchResults).value;
      const expected = call(cleaners.cleanSearchResults, mockSearchResults);

      expect(value).toEqual(expected);
    })

    it('yields put with the updateSearchResults action', () => {
      const mockCleanedResults = ['cleanArtist'];
      const value = iterator.next(mockCleanedResults).value;
      const expected = put(actions.updateSearchResults(mockCleanedResults));

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })

  })

  describe('submitUpdateSearch error', () => {
    let iterator;
    let mockAction;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_SERACH',
        other: 'hi'
      } 
      iterator = sagas.submitUpdateSearch(mockAction);
      iterator.next();
    })

    it('yields put with updateSearchError action if there is an error', () => {
      const expected = put(actions.updateSearchError('fml'));
      const value = iterator.throw(Error('fml')).value;

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })
  })


  describe('listenForSubmitUpdateArtist', () => {
    let iterator;

    beforeAll(() => {
      iterator = sagas.listenForSubmitUpdateArtist();
    })

    it('should takeLatest SUBMIT_UPDATE_ARTIST', () => {
      const value = iterator.next().value;
      const expected = takeLatest('SUBMIT_UPDATE_ARTIST', sagas.submitUpdateArtist);

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    }) 
  })


  describe('submitUpdateArtist', () => {
    let iterator;
    let mockAction;
    let mockRawArtistData;
    let mockTopTracks;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_ARTIST',
        artistId: 'beebs',
        accessToken: 1
      }
      iterator = sagas.submitUpdateArtist(mockAction);
      mockRawArtistData = {
        artistId: 'iambeebs',
        name: 'beebs',
        image: 'beebsUrl'
      }
      mockTopTracks = ['track1', 'track2']
    })

    it('yields call with the correct getArtistData apiCall and arguments', () => {
      const value = iterator.next().value;
      const expected = call(apiCalls.getArtistData, mockAction.artistId, mockAction.accessToken);

      expect(value).toEqual(expected);
    })

    it('yields call with the correct getTopTracks apiCall and arguments', () => {
      const value = iterator.next(mockRawArtistData).value;
      const expected = call(apiCalls.getTopTracks, mockAction.artistId, mockAction.accessToken);

      expect(value).toEqual(expected);
    })

    it('yields call with the correct data cleaner and args', () => {
      const value = iterator.next(mockTopTracks).value;
      const expected = call(cleaners.cleanArtistData, mockRawArtistData, mockTopTracks)

      expect(value).toEqual(expected);
    })

    it('yields put with updateArtist action', () => {
      const mockCleanedArtist = {
        artistId: 'iambeebs'
      }
      const value = iterator.next(mockCleanedArtist).value;
      const expected = put(actions.updateArtist(mockCleanedArtist));

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })

  })

  describe('submitUpdateArtist error', () => {
    let iterator;
    let mockAction;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_ARTIST',
        artist: 'iamnotanartist'
      }
      iterator = sagas.submitUpdateArtist(mockAction);
      iterator.next();
    })

    it('yields put with updateArtistError action if there is an error', () => {
      const expected = put(actions.updateArtistError('iamnotanartist'));
      const value = iterator.throw(Error('iamnotanartist')).value;

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })

  })

  describe('listenForSubmitUpdateSpotifiveId', () => {
    let iterator;

    beforeAll(() => {
      iterator = sagas.listenForSubmitUpdateSpotifiveId();
    })

    it('should takeLatest SUBMIT_UPDATE_SPOTIFIVEID', () => {
      const value = iterator.next().value;
      const expected = takeLatest('SUBMIT_UPDATE_SPOTIFIVEID', sagas.submitUpdateSpotifiveId);

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    }) 
  })

  describe('submitUpdateSpotifiveId', () => {
    let iterator;
    let mockAction;
    let mockPlaylist;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_SPOTIFIVEID',
        userId: 2,
        accessToken: 1
      }
      iterator = sagas.submitUpdateSpotifiveId(mockAction);
      mockPlaylist = { id: 'pickME' }
    })

    it('yields call with the correct createSpotifive apiCall and arguments', () => {
      const value = iterator.next().value;
      const expected = call(apiCalls.createSpotifive, mockAction.userId, mockAction.accessToken);

      expect(value).toEqual(expected);
    })

    it('yields put with updateSpotifiveId action', () => {
      const value = iterator.next(mockPlaylist).value;
      const expected = put(actions.updateSpotifiveId(mockPlaylist.id));

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })

  })

  describe('submitUpdateSpotifiveId error', () => {
    let iterator;
    let mockAction;

    beforeAll(() => {
      mockAction = {
        type: 'SUBMIT_UPDATE_SPOTIFIVEID',
        accessToken: 'hi'
      }
      iterator = sagas.submitUpdateSpotifiveId(mockAction);
      iterator.next();
    })

    it('yields put with updateArtistError action if there is an error', () => {
      const expected = put(actions.updateUserError('could not create playlist'));
      const value = iterator.throw(Error('could not create playlist')).value;

      expect(value).toEqual(expected);
    })

    it('should be done', () => {
      const done = iterator.next().done;

      expect(done).toBe(true);
    })

  })


})
