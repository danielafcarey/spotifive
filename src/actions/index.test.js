import { 
  updateAccessToken,
  updateUser
} from './index.js';

describe('actions', () => {

  it('returns an UPDATE_ACCESS_TOKEN action object', () => {
    const expected = {
      type: 'UPDATE_ACCESS_TOKEN',
      accessToken: 'ITSANACCESSTOKEN'
    }
    const result = updateAccessToken(expected.accessToken);

    expect(result).toEqual(expected);
  })

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
})
