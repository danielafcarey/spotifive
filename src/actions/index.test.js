import { 
  updateAccessToken,
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
})
