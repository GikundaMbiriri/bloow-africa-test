import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card';
import {render as rtlRender, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import store from '../../../redux/store';
import {Provider} from 'react-redux';
import { HashRouter as Router } from "react-router-dom";
import { act } from '@testing-library/react-hooks/dom'
const render=component=>rtlRender(
    <Provider store={store}>
        <Router>
        {component}
        </Router>
    </Provider>
)
it("it renders without crashing",()=>{
    const div = document.createElement('div');
    render(<Card></Card>,div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(
      <Provider store={store}>
          <Router>
      <Card></Card>
      </Router>
      </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


