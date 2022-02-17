import React from 'react'
import ReactDOM from 'react-dom'
import Upload from '../Upload';
import {render as rtlRender, screen} from '@testing-library/react'
import renderer from 'react-test-renderer';
import store from '../../../redux/store';
import {Provider} from 'react-redux';
import { HashRouter as Router } from "react-router-dom";

const render=component=>rtlRender(
    <Provider store={store}>
        <Router>
        {component}
        </Router>
    </Provider>
)
it("it renders without crashing",()=>{
    const div = document.createElement('div');
    render(<Upload></Upload>,div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(
      <Provider store={store}>
          <Router>
      <Upload></Upload>
      </Router>
      </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
describe('Upload',()=>{
    // test('Upload text appears on the upload button then the component is not loading', () => { 
    //     let state = store.getState();

    //     render(<Upload/>)
    // if(!state.data.loading){
    //     expect(screen.getByTestId('uploadid')).toHaveTextContent('Upload')

    // }




     
    
    // })
    // test('the Upload button does does not display the Upload text when the component is loading',()=>{
    //     let state = store.getState();
    //     state.data['loading']=true;
    //     render(<Upload/>)
    //         expect(screen.getByTestId('uploadid')).not.toHaveTextContent('Upload')
        
        
    // })
})