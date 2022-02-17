import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../Login';
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
    render(<Login></Login>,div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(
      <Provider store={store}>
          <Router>
      <Login></Login>
      </Router>
      </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Login',()=>{
    test('input fields should be filled correctly',()=>{
        render(<Login/>)
        const credentials = { email: 'test@gmail.com', password: 'testpass' };
        const emailInput=screen.getByTestId('emailId');
        emailInput.value=credentials.email;
        const passwordInput=screen.getByTestId('passwordId');
        passwordInput.value=credentials.password;
     

        expect(emailInput.value).toBe('test@gmail.com');
        expect(passwordInput.value).toBe('testpass');
    
    })
    test('the login button displays login text so long as the component is not loading',()=>{
       let state = store.getState();

        render(<Login/>)
    if(!state.UI.loading){
        expect(screen.getByTestId('loginid')).toHaveTextContent('Login')

    }




     
    
    })
    test('the login button does does not display the login text when the component is loading',()=>{
        let state = store.getState();
        state.UI['loading']=true;
        render(<Login/>)
            expect(screen.getByTestId('loginid')).not.toHaveTextContent('Login')
        
        
    })
    test('Error messages do not display when there are no errors',()=>{
        let state = store.getState();
        render(<Login/>)
     
        if(!state.UI.errors){
            expect(screen.getByTestId('epassword')).toHaveTextContent('');
            expect(screen.getByTestId('eemail')).toHaveTextContent('');
            expect(screen.getByTestId('egeneral')).toHaveTextContent('Complete this form correctly')

        }
 
    })
    test('displays password error message correctly', () => {
        let state = store.getState();
        state.UI['errors']={password:'Password field cannot be empty'};

        render(<Login/>) 
        expect(screen.getByTestId('epassword')).toHaveTextContent('Password field cannot be empty');

     })
    test('displays email error message correctly', () => {
        let state = store.getState();
        state.UI['errors']={email:'Email field cannot be empty'};

        render(<Login/>) 
        expect(screen.getByTestId('eemail')).toHaveTextContent('Email field cannot be empty');

     })
    test('displays general error message correctly', () => {
        let state = store.getState();
        state.UI['errors']={general:'General field cannot be empty'};

        render(<Login/>) 
        expect(screen.getByTestId('egeneral')).toHaveTextContent('General field cannot be empty');

     })

})