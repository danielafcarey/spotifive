import * as cleaner from './cleaner';
import {
  mockUserData,
  mockUserPlaylists2,
  mockSearchResults,
  mockArtistData,
  mockTopTracks
} from './mockData';

describe('getAccessToken', () => {

  it('returns a cleaned access token', () => {
    const mockAccessToken = 'http://localhost:3000/authorize?access_token=IAMANACCESSTOKEN';
    const expected = 'IAMANACCESSTOKEN';
    const result = cleaner.getAccessToken(mockAccessToken);

    expect(result).toEqual(expected);
  })
})

describe('cleanUserData', () => {

  it('returns a cleaned user object', () => {
    const mockPlaylists = mockUserPlaylists2.items; 
    const expected = {
      userId: 'wizzler' ,
      name: 'JM Wizzler',
      spotifive: {
        spotifiveId: null,
        link: null
      },
      image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg'
    } 
    const result = cleaner.cleanUserData(mockUserData, mockPlaylists);

    expect(result).toEqual(expected);
  })

  it('returns a cleaned user object with image as null if user has no image', () => {
    const mockPlaylists = mockUserPlaylists2.items;
    const mockUser = {
      id: 1,
      display_name: 'it me',
      images: []
    }
    const expected = {
      userId: 1,
      name: 'it me',
      spotifive: {
        spotifiveId: null,
        link: null
      },
      image: null
    }

    const result = cleaner.cleanUserData(mockUser, mockPlaylists);
    expect(result).toEqual(expected);
  })

  it('returns a user object with spotifiveId if playlists include Spotifive', () => {
    const mockPlaylists = [{ 
      name: 'Spotifive',
      id: 1,
      external_urls: {
        spotify: 'spotify.com'
      }
    }];
    const expected = {
      userId: 'wizzler' ,
      name: 'JM Wizzler',
      spotifive: {
        spotifiveId: 1,
        link: 'spotify.com'
      },
      image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg'
    } 
    const result = cleaner.cleanUserData(mockUserData, mockPlaylists);

    expect(result).toEqual(expected);
  })

})

describe('cleanSearchResults', () => {

  it('returns a cleaned array of search results', () => {
    const expected = [{
      name: 'Ivan Molina & Abba Padre Band',
      id: '6BwpDpGWc8m630vadAuLRn',
      image: 'https://i.scdn.co/image/0fc0f29f3b61ab4524603c9be2e92eb6acba22ae'
    }]; 
    const result = cleaner.cleanSearchResults(mockSearchResults);

    expect(result).toEqual(expected);
  })

  it('sets the user image as null if there is no image', () => {
    const mockResultsWithNoImage = {
      artists: {
        items: [{
          name: 'it me',
          id: 'garbage',
          images: []
        }]
      }
    };
    const expected = [{
      name: 'it me',
      id: 'garbage',
      image: null
    }];
    const result = cleaner.cleanSearchResults(mockResultsWithNoImage);

    expect(result).toEqual(expected);
  })
})

describe('cleanArtistData', () => {

  it('returns a cleaned artist object', () => {
    const mockTopTracksArg = {
      tracks: [
        { name: 'numba1', uri: 'uri' }
      ]
    }
    const expected = {
      name: 'Band of Horses',
      id: '0OdUWJ0sBjDrqHygGUXeCF',
      image: 'https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903',
      topTracks: mockTopTracksArg.tracks
    }
    const result = cleaner.cleanArtistData(mockArtistData, mockTopTracksArg);

    expect(result).toEqual(expected);
  }) 

  it('sets the artist image to null if there is no image', () => {
    const mockTopTracksArg = {
      tracks: [{ name: 'a track', uri: 'uri' }]
    }
    const artistDataNoImage = {
      name: 'artsy fartsy',
      id: '1',
      images: []
    }
    const expected = {
      name: 'artsy fartsy',
      id: '1',
      image: null,
      topTracks: mockTopTracksArg.tracks
    }
    const result = cleaner.cleanArtistData(artistDataNoImage, mockTopTracksArg);

    expect(result).toEqual(expected);
  })

})

describe('cleanTopTracks', () => {

  it('returns a cleaned array of top tracks', () => {
    const expected = [ 
      { name: 'Can\'t Help Falling in Love',
        uri: 'spotify:track:44AyOl4qVkzS48vBsbNXaC' },
      { name: 'Jailhouse Rock',
        uri: 'spotify:track:4gphxUgq0JSFv2BCLhNDiE' },
      { name: 'Hound Dog',
        uri: 'spotify:track:64Ny7djQ6rNJspquof2KoX' },
      { name: 'Suspicious Minds',
        uri: 'spotify:track:1H5IfYyIIAlgDX8zguUzns' },
      { name: 'Burning Love',
        uri: 'spotify:track:7zMUCLm1TN9o9JlLISztxO' } 
    ];

    const result = cleaner.cleanTopTracks(mockTopTracks.tracks);

    expect(result).toEqual(expected);
  })

})






