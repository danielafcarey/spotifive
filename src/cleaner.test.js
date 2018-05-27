import * as cleaner from './cleaner';

describe('getAccessToken', () => {

  it('should return a cleaned access token', () => {
    const mockAccessToken = 'http://website.com/authorize#access_token=IAMANACCESSTOKEN&token_type=hello&expires_in=3600';
    const expected = 'IAMANACCESSTOKEN';
    const result = cleaner.getAccessToken(mockAccessToken);

    expect(result).toEqual(expected);
  })
})
