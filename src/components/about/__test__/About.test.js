import React from 'react'
import ReactDOM from 'react-dom'
import {render, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import About from '../About'
it("it renders without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<About></About>,div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(<About></About>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });