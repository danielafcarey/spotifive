import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import {
  Search,
  mapStateToProps,
  mapDispatchToProps
} from './Search';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Search />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Search', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Search />)

    expect(wrapper).toMatchSnapshot();
  })

  it('matches the snapshot if artist has been found', () => {

  })

  it('matches the snapshot if artist was not found', () => {

  })

  it('has a default state of searchInput', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.state('searchInput')).toEqual('');
  })

  describe('handleChange', () => {

    it('sets the state of searchInput', () => {
      const wrapper = shallow(<Search />);
      const mockEvent = { target: { value: 'some input' } };
      const expected = 'some input';
      
      wrapper.instance().handleChange(mockEvent);

      expect(wrapper.state('searchInput')).toEqual(expected);
    })

  })

  describe('handleSubmit', () => {
    let wrapper;
    let mockEvent;

    beforeEach(() => {
      wrapper = shallow(<Search />)
      mockEvent = { preventDefault: () => {} }
    })

    it('gets the artist info and top song ids', () => {
      // 2 fetch calls - one to get artist id and one to get top 5 songs
    })

    it('updates the store with new artist info', () => {

    })

    it('resets the state to an empty string', () => {
      wrapper.instance().handleSubmit;

      expect(wrapper.state('searchInput')).toEqual('');
    })

  })

  describe('mapStateToProps', () => {

    it('returns a state object with user and artist', () => {

    })

  })

  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with the correct arguments', () => {

    })

  })

})
