import {
  getUserData,
  getUserPlaylists,
  getAllPlaylists
} from './apiCalls';
import {
  mockUserData,
  mockUserPlaylists1,
  mockUserPlaylists2
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

describe('getUserPlaylists', () => {
    
    beforeEach(() => {
      accessToken = 'thisisaccesstoken';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockUserPlaylists2)
      }));
    })

    it('should call fetch with the correct arguments', async () => {
      const url = 'https://api.spotify.com/v1/me/playlists?limit=50';
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getUserPlaylists(accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('should fetch all the users playlists if there are multiple pages', () => {
      
    })

    it('should return the correct data', async () => {
      const expected = mockUserPlaylists2.items;
      const result = await getUserPlaylists(accessToken);

      expect(result).toEqual(expected);
    })

    it('should throw an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('500');
      const result = getUserPlaylists(accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('should throw an error if the response was 401', () => {

    })

    it('should throw an error if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('Fetch failed'))
      
      const expected = 'Fetch failed';
      const result = getUserPlaylists(accessToken);
      
      expect(result).rejects.toEqual(expected);
    })
  })
})
