import logo from './logo.svg';
import './App.css';
import home from './pages/home/home'
import upload from './pages/upload';
import register from './pages/register';
import login from './pages/login';
import { Provider } from "react-redux";
import store from "./redux/store";
import jwtDecode from "jwt-decode";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import { SET_AUTHENTICATED } from "./redux/types";
import axios from "axios";

import { logoutUser, getUserData } from "./redux/actions/userAction";
import { ToastProvider } from 'react-toast-notifications';
axios.defaults.baseURL =
  "https://us-central1-pizzesadmin.cloudfunctions.net/api/";
function App() {
  
  const token = localStorage.FBIdToken;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      window.location.href = "/login";
      store.dispatch(logoutUser());
    } else {
      store.dispatch({ type: SET_AUTHENTICATED });
      axios.defaults.headers.common["Authorization"] = token;
      store.dispatch(getUserData());
    }
  }
  return (<>
  <div className='h-screen flex flex-col justify-between'>
  <Provider store={store}>
   <Router>
   <Navbar/>
   <ToastProvider>
     <Switch>
     <Route exact path="/" component={home} />
     <Route exact path="/login" component={login} />
     <Route exact path="/register" component={register} />
     <Route exact path="/upload" component={upload} />
     </Switch>
     </ToastProvider>
     <Footer/>

   </Router>
   </Provider>
   </div>
    </>
  );
}

export default App;
