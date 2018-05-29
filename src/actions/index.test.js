import { 
  updateAccessToken,
  updateUser,
  updateUserError,
  submitUpdateUser,
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

  it('retuns an SUBMIT_UPDATE_USER action object', () => {
    const expected = {
      type: 'SUBMIT_UPDATE_USER',
      accessToken: 'y tho'
    }
    const result = submitUpdateUser(expected.accessToken);

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
      artistName: 'beeeeeeebs'
    }
    const result = submitUpdateArtist(expected.artistName);

    expect(result).toEqual(expected);
  })

})






