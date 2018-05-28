import * as cleaner from './cleaner';
import {
  mockUserData,
  mockUserPlaylists2
} from './mockData';

describe('getAccessToken', () => {

  it('returns a cleaned access token', () => {
    const mockAccessToken = 'http://website.com/authorize#access_token=IAMANACCESSTOKEN&token_type=hello&expires_in=3600';
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
      spotifiveId: null,
      image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg'
    } 
    const result = cleaner.cleanUserData(mockUserData, mockPlaylists);

    expect(result).toEqual(expected);
  })

  it('returns a user object with spotifiveId if playlists include Spotifive', () => {
    const mockPlaylists = [{ 
      name: 'Spotifive',
      id: 1
    }];
    const expected = {
      userId: 'wizzler' ,
      name: 'JM Wizzler',
      spotifiveId: 1,
      image: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg'
    } 
    const result = cleaner.cleanUserData(mockUserData, mockPlaylists);

    expect(result).toEqual(expected);

  })
})
