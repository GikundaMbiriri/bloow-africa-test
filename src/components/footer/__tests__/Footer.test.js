import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer';
import Footer from '../Footer'
it("it renders without crashing",()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Footer></Footer>,div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(<Footer></Footer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });