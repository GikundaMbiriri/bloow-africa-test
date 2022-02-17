import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from '../Navbar';
import {render as rtlRender, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import store from '../../../redux/store';
import {Provider} from 'react-redux';
import { HashRouter as Router } from "react-router-dom";
store['user']={
    authenticated:false
}
const render=component=>rtlRender(
    <Provider store={store}>
        <Router>
        {component}
        </Router>
    </Provider>
)
it("it renders without crashing",()=>{
    const div = document.createElement('div');
    render(<Navbar></Navbar>,div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(
      <Provider store={store}>
          <Router>
      <Navbar></Navbar>
      </Router>
      </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
describe('Navbar',()=>{
    test('home link appears for both authenticated and unauthenticated users',()=>{
        render(<Navbar/>)
        expect(screen.getByTestId('home')).toBeInTheDocument()
    })
    test('login button appears only for unauthenticated users',()=>{
        render(<Navbar/>)
        expect(screen.getByTestId('login')).toBeInTheDocument()
    })
    test('register button appears only for unauthenticated users',()=>{
        render(<Navbar/>)
        expect(screen.getByTestId('register')).toBeInTheDocument()
    })
    test('register button appears only for unauthenticated users',()=>{
        render(<Navbar/>)
        expect(screen.getByTestId('register')).toBeInTheDocument()
    })
    test('register button appears only for unauthenticated users',()=>{
        render(<Navbar/>)
       if(store.user.authenticated){
       
 
        expect(screen.getByTestId('logout')).toBeInTheDocument()

       

       }
else{

    const credentials = screen.queryByTestId('credentials')
    expect(credentials).toBeNull() 
}
        
    })
})