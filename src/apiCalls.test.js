import {
  getUserData,
} from './apiCalls';
import {
  mockUserData
} from './mockData';

describe('apiCalls', () => {
  let accessToken;

  describe('getUserData', () => {
    
    beforeEach(() => {
      accessToken = 'thisisaccesstoken';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockUserData)
      }));
    })

    it('should call fetch with the correct arguments', async () => {
      const url = 'https://api.spotify.com/v1/me';
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getUserData(accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('should return the correct data', async () => {
      const expected = mockUserData;
      const result = await getUserData(accessToken);

      expect(result).toEqual(expected);
    })

    it('should throw an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('There was a problem signing in');
      const result = getUserData(accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('should throw an error if the response was 401', () => {

    })

    it('should throw an error if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('Fetch failed'))
      
      const expected = 'Fetch failed';
      const result = getUserData(accessToken);
      
      expect(result).rejects.toEqual(expected);
    })
  })
})
