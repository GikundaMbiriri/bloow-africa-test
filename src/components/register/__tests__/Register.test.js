import React from 'react'
import ReactDOM from 'react-dom'
import Register from '../Register';
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
    render(<Register></Register>,div)
})

it('renders correctly', () => {
    const tree = renderer
      .create(
      <Provider store={store}>
          <Router>
      <Register></Register>
      </Router>
      </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Register',()=>{
    test('input fields should be filled correctly',()=>{
        render(<Register/>)
        const credentials = {username:'peter', email: 'test@gmail.com', password: 'testpass' ,confirmPassword:'testpass'};
        const usernameInput=screen.getByTestId('usernameid');
        usernameInput.value=credentials.username;
        const emailInput=screen.getByTestId('emailid');
        emailInput.value=credentials.email;
        const passwordInput=screen.getByTestId('passwordid');
        passwordInput.value=credentials.password;
        const cpasswordInput=screen.getByTestId('cpasswordid');
        cpasswordInput.value=credentials.confirmPassword;
     

        expect(usernameInput.value).toBe('peter');

        expect(emailInput.value).toBe('test@gmail.com');
        expect(passwordInput.value).toBe('testpass');
        expect(cpasswordInput.value).toBe('testpass');
    
    })
    test('password and confirm password values are equal',()=>{
        render(<Register/>)
        const credentials = {username:'peter', email: 'test@gmail.com', password: 'testpass' ,confirmPassword:'testpass'};
        const usernameInput=screen.getByTestId('usernameid');
        usernameInput.value=credentials.username;
        const emailInput=screen.getByTestId('emailid');
        emailInput.value=credentials.email;
        const passwordInput=screen.getByTestId('passwordid');
        passwordInput.value=credentials.password;
        const cpasswordInput=screen.getByTestId('cpasswordid');
        cpasswordInput.value=credentials.confirmPassword;
     

      
        expect(passwordInput.value).toEqual(cpasswordInput.value)
    
    })
    test('the Register button displays Register text so long as the component is not loading',()=>{
        render(<Register/>)
      
     

        expect(screen.getByTestId('regbutton')).toHaveTextContent('Register')
     
    
    })
    test('the register button does does not display the Register text when the component is loading',()=>{
        let state = store.getState();
        state.UI['loading']=true;
        render(<Register/>)
            expect(screen.getByTestId('regbutton')).not.toHaveTextContent('Register')
        
        
    })
    test('Error messages do not display when there are no errors',()=>{
        let state = store.getState();
        render(<Register/>)
     
        if(!state.UI.errors){
            expect(screen.getByTestId('eusername')).toHaveTextContent('');
            expect(screen.getByTestId('eemail')).toHaveTextContent('');

            expect(screen.getByTestId('epassword')).toHaveTextContent('');
            expect(screen.getByTestId('econfirmPassword')).toHaveTextContent('')

        }
 
    })
    test('displays username error message correctly', () => {
        let state = store.getState();
        state.UI['errors']={username:'Username field cannot be empty'};

        render(<Register/>) 
        expect(screen.getByTestId('eusername')).toHaveTextContent('Username field cannot be empty');

     })
    test('displays password error message correctly', () => {
        let state = store.getState();
        state.UI['errors']={password:'Password field cannot be empty'};

        render(<Register/>) 
        expect(screen.getByTestId('epassword')).toHaveTextContent('Password field cannot be empty');

     })
    test('displays email error message correctly', () => {
        let state = store.getState();
        state.UI['errors']={email:'Email field cannot be empty'};

        render(<Register/>) 
        expect(screen.getByTestId('eemail')).toHaveTextContent('Email field cannot be empty');

     })
    test('displays confirm password error message correctly', () => {
        let state = store.getState();
        state.UI['errors']={confirmPassword:'Confirm Password field cannot be empty'};

        render(<Register/>) 
        expect(screen.getByTestId('econfirmPassword')).toHaveTextContent('Confirm Password field cannot be empty');

     })

})