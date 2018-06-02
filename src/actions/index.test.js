import { 
  updateAccessToken,
  updateUser,
  updateUserError,
  submitUpdateUser,
  submitUpdateSpotifiveId,
  updateSpotifiveId,
  updateSearchResults,
  updateSearchError,
  submitUpdateSearch,
  updateArtist,
  updateArtistError,
  submitUpdateArtist
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

  it('returns a SUBMIT_UPDATE_SPOTIFIVEID action object', () => {
    const expected = {
      type: 'SUBMIT_UPDATE_SPOTIFIVEID',
      accessToken: 'it me',
    }
    const result = submitUpdateSpotifiveId('it me');

    expect(result).toEqual(expected);
  })

  it('returns an UPDATE_SPOTIFIVEID action object', () => {
    const expected = {
      type: 'UPDATE_SPOTIFIVEID',
      spotifiveId: '123'
    }
    const result = updateSpotifiveId('123');

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






