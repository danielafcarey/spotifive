import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Authorize from './Authorize';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Authorize />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Authorize', () => {

  it('matches the snapshot', () => {

  })

})

