import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Tryit from './Tryit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Tryit />, div);
  ReactDOM.unmountComponentAtNode(div);
});
