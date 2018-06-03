import { 
  updateAccessToken,
  updateUser,
  updateUserError,
  submitUpdateUser,
  submitUpdateSpotifive,
  updateSpotifive,
  updateSearchResults,
  updateSearchError,
  submitUpdateSearch,
  updateArtist,
  updateArtistError,
  submitUpdateArtist,
  updateSpotifiveSuccess
} from './index.js';

describe('access token actions', () => {

  it('returns an UPDATE_ACCESS_TOKEN action object', () => {
    const expected = {
      type: 'UPDATE_ACCESS_TOKEN',
      accessToken: 'ITSANACCESSTOKEN'
    }
    const result = updateAccessToken(expected.accessToken);

    expect(result).toEqual(expected);
  })

})

describe('user actions', () => {

  it('returns an UPDATE_USER action object', () => {
    const expected = {
      type: 'UPDATE_USER',
      user: {
        userId: 1,
        name: 'Daniela',
        image: 'imageurl',
        hasSpotifive: false
      }
    }
    const result = updateUser(expected.user);

    expect(result).toEqual(expected);
  })

  it('retuns an UPDATE_USER_ERROR action object', () => {
    const expected = {
      type: 'UPDATE_USER_ERROR',
      error: 'y tho'
    }
    const result = updateUserError(expected.error);

    expect(result).toEqual(expected);
  })

  it('retuns a SUBMIT_UPDATE_USER action object', () => {
    const expected = {
      type: 'SUBMIT_UPDATE_USER',
      accessToken: 'y tho'
    }
    const result = submitUpdateUser(expected.accessToken);

    expect(result).toEqual(expected);
  })

  it('returns a SUBMIT_UPDATE_SPOTIFIVE action object', () => {
    const expected = {
      type: 'SUBMIT_UPDATE_SPOTIFIVE',
      userId: 1,
      spotifiveId: 2,
      topTracks: [],
      accessToken: 'it me',
    }
    const result = submitUpdateSpotifive(1, 2, [], 'it me');

    expect(result).toEqual(expected);
  })

  it('returns an UPDATE_SPOTIFIVE action object', () => {
    const expected = {
      type: 'UPDATE_SPOTIFIVE',
      spotifiveId: '123',
      link: 'gohere.com'
    }
    const result = updateSpotifive('123', 'gohere.com');

    expect(result).toEqual(expected);
  })

})

describe('search action', () => {

  it('returns an UPDATE_SEARCH_RESULTS action object', () => {
    const expected = {
      type: 'UPDATE_SEARCH_RESULTS',
      searchResults: ['result1', 'result2']
    }
    const result = updateSearchResults(expected.searchResults);

    expect(result).toEqual(expected);
  })

  it('returns an UPDATE_SEARCH_ERROR action object', () => {
    const expected = {
      type: 'UPDATE_SEARCH_ERROR',
      error: 'i failed but im not a failure'
    }
    const result = updateSearchError(expected.error);

    expect(result).toEqual(expected);
  })

  it('returns a SUBMIT_UPDATE_SEARCH action object', () => {
    const expected = {
      type: 'SUBMIT_UPDATE_SEARCH',
      searchString: 'the garbage man',
      accessToken: '1'
    }
    const result = submitUpdateSearch(expected.searchString, expected.accessToken);

    expect(result).toEqual(expected);
  })
})

describe('artist actions', () => {

  it('retuns an UPDATE_ARTIST action object', () => {
    const expected = {
      type: 'UPDATE_ARTIST',
      artist: {
        name: 'beebs',
        artistId: 'belieber',
        image: 'beebsUrl'
      }
    }
    const result = updateArtist(expected.artist);

    expect(result).toEqual(expected);
  })

  it('retuns an UPDATE_ARTIST_ERROR action object', () => {
    const expected = {
      type: 'UPDATE_ARTIST_ERROR',
      error: 'y tho'
    }
    const result = updateArtistError(expected.error);

    expect(result).toEqual(expected);
  })

  it('retuns an SUBMIT_UPDATE_ARTIST action object', () => {
    const expected = {
      type: 'SUBMIT_UPDATE_ARTIST',
      artistId: 'beeeeeeebs',
      accessToken: 1
    }
    const result = submitUpdateArtist(expected.artistId, expected.accessToken);

    expect(result).toEqual(expected);
  })

})


describe('updateSpotifiveSuccess', () => {

  it('returns an UPDATE_SPOTIFIVE_SUCCESS action object', () => {
    const expected = {
      type: 'UPDATE_SPOTIFIVE_SUCCESS',
      message: 'it worked!'
    }
    const result = updateSpotifiveSuccess('it worked!');

    expect(result).toEqual(expected);
  })
})




