import {
  getUserInfo,
} from './apiCalls';

describe('apiCalls', () => {

  describe('getUserInfo', () => {
    let mockUserData;
    
    beforeEach(() => {
      mockUserData = {

      }
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(mockUserData)
      }))
    })

    it('should call fetch with the correct arguments', () => {
      
    })

    it('should return the correct data', () => {

    })

    it('should throw an error if the response was not ok', () => {

    })

    it('should throw an error if the fetch failed', () => {

    })
  })
})
