import {
  getUserData,
  getUserPlaylists,
  getSearchResults,
  getArtistData,
  getAllPlaylists,
  getTopTracks,
  createSpotifive,
  addTopSongs
} from './apiCalls';
import {
  mockUserData,
  mockUserPlaylists1,
  mockUserPlaylists2,
  mockSearchResults,
  mockArtistData,
  mockTopTracks,
  mockPlaylistObject
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

    it('calls fetch with the correct arguments', async () => {
      const url = 'https://api.spotify.com/v1/me';
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getUserData(accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('returns the correct data', async () => {
      const expected = mockUserData;
      const result = await getUserData(accessToken);

      expect(result).toEqual(expected);
    })

    it('throws an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('There was a problem signing in');
      const result = getUserData(accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('throws an error if the response was 401', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 401
      }))

      const expected = Error('Please sign in again');
      const result = getUserData(accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('throws an error if the fetch failed', () => {
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

    it('calls fetch with the correct arguments', async () => {
      const url = 'https://api.spotify.com/v1/me/playlists?limit=50';
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getUserPlaylists(accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('returns the correct data', async () => {
      const expected = mockUserPlaylists2.items;
      const result = await getUserPlaylists(accessToken);

      expect(result).toEqual(expected);
    })

    it('throws an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('There was a problem fetching your playlists');
      const result = getUserPlaylists(accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('throws an error if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('Fetch failed'))

      const expected = 'Fetch failed';
      const result = getUserPlaylists(accessToken);

      expect(result).rejects.toEqual(expected);
    })

  })

  describe('getAllPLaylists', () => {

    beforeEach(() => {
      accessToken = 'thisisaccesstoken';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockUserPlaylists2)
      }));
    })

    it('calls fetch with the correct arguments if nextPage is not null', async () => {
      const prevPlaylists = ['playlist1']
      const nextPage = 'https://api.spotify.com/v1/me/playlists?limit=50';
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getAllPlaylists(prevPlaylists, nextPage, optionsObject);

      expect(window.fetch).toHaveBeenCalledWith(nextPage, optionsObject);
    })

    it('returns the prevPlaylists if nextPage is null', async () => {
      const prevPlaylists = ['playlist1']
      const nextPage = null;
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      const result = await getAllPlaylists(prevPlaylists, nextPage, optionsObject);

      expect(result).toEqual(prevPlaylists);

    })

    it('returns a combined playlist array', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve({ 
          items: ['playlist1'],
          next: null
        })
      }));
      const prevPlaylists = ['playlist2']
      const nextPage = 'notNull'
      const optionsObject = 'fakeOptions'
      const expected = ['playlist1', 'playlist2'];
      const result = await getAllPlaylists(prevPlaylists, nextPage, optionsObject);

      expect(result).toEqual(expected);
    })

    it('throws an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('There was a problem fetching your playlists');
      const result = getAllPlaylists();

      expect(result).rejects.toEqual(expected);
    })

    it('throws an error if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('Fetch failed'))

      const expected = 'Fetch failed';
      const result = getAllPlaylists();

      expect(result).rejects.toEqual(expected);
    })
  })

 describe('getSearchResults', () => {
    let searchString;
    
    beforeEach(() => {
      accessToken = 'thisisaccesstoken';
      searchString = 'abba band';
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockSearchResults)
      }));
    })

    it('calls fetch with the correct arguments', async () => {
      const url = `https://api.spotify.com/v1/search?q=abba+band&type=artist&limit=5`;
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getSearchResults(searchString, accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('returns the correct data', async () => {
      const expected = mockSearchResults;
      const result = await getSearchResults(searchString, accessToken);

      expect(result).toEqual(expected);
    })

    it('throws an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('There was a problem. Please try again.');
      const result = getSearchResults(searchString, accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('throws an error if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('Fetch failed'))
      
      const expected = 'Fetch failed';
      const result = getSearchResults(searchString, accessToken);
      
      expect(result).rejects.toEqual(expected);
    })
  })


  describe('getArtistData', () => {
    let artistId;
    
    beforeEach(() => {
      accessToken = 'thisisaccesstoken';
      artistId = 1
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockArtistData)
      }));
    })

    it('calls fetch with the correct arguments', async () => {
      const url = `https://api.spotify.com/v1/artists/1`
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getArtistData(artistId, accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('returns the correct data', async () => {
      const expected = mockArtistData;
      const result = await getArtistData(artistId, accessToken);

      expect(result).toEqual(expected);
    })

    it('throws an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('There was a problem getting that artist.');
      const result = getArtistData(artistId, accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('throws an error if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('Fetch failed'))
      
      const expected = 'Fetch failed';
      const result = getArtistData(artistId, accessToken);
      
      expect(result).rejects.toEqual(expected);
    })
  })


  describe('getTopTracks', () => {
    let artistId;
    
    beforeEach(() => {
      accessToken = 'thisisaccesstoken';
      artistId = 1
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockTopTracks)
      }));
    })

    it('calls fetch with the correct arguments', async () => {
      const url = `https://api.spotify.com/v1/artists/1/top-tracks?country=US`
      const optionsObject = {
        headers: { 'Authorization': `Bearer ${accessToken}` }
      };

      await getTopTracks(artistId, accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('returns the correct data', async () => {
      const expected = mockTopTracks;
      const result = await getTopTracks(artistId, accessToken);

      expect(result).toEqual(expected);
    })

    it('throws an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 500
      }));

      const expected = Error('There was a problem getting artists top tracks.');
      const result = getTopTracks(artistId, accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('throws an error if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('Fetch failed'))
      
      const expected = 'Fetch failed';
      const result = getTopTracks(artistId, accessToken);
      
      expect(result).rejects.toEqual(expected);
    })
  })


  describe('createSpotifive', () => {
    let optionsObject; 
    let playlistBody;
    let accessToken;

    beforeEach(() => {
      playlistBody = {
        name: 'Spotifive',
        description: 'Check out this new music!'
      };
      accessToken = 'hi';
      optionsObject = {
        method: 'POST',
        headers: { 
          'Authorization': `Bearer ${accessToken}`,
          'Content-type': 'application/json'
        },
        body: JSON.stringify(playlistBody)
      };
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockPlaylistObject)
      }));
    })

    it('calls fetch with the correct arguments', async () => {
      const url = `https://api.spotify.com/v1/users/1/playlists`; 

      await createSpotifive(1, accessToken);

      expect(window.fetch).toHaveBeenCalledWith(url, optionsObject);
    })

    it('returns a playlist object if successful', async () => {
      const expected = mockPlaylistObject;
      const result = await createSpotifive(1, accessToken);

      expect(result).toEqual(expected);
    })

    it('throws an error if the response was not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 402,
      }));
      const expected = Error('Oops! There was a problem authorizing your account.')
      const result = createSpotifive(1, accessToken);

      expect(result).rejects.toEqual(expected);
    })

    it('throws an errof if the fetch failed', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.reject('There was a problem with your account - please sign in again.'));
      const expected = 'There was a problem with your account - please sign in again.'
      const result = createSpotifive(1, accessToken);

      expect(result).rejects.toEqual(expected);

    })
  })


  describe('addTopSongs', () => {

  })


})
