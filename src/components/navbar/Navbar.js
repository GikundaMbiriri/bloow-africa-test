import { useState } from 'react'
import { Disclosure} from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/actions/userAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar(props) {
  const { authenticated,credentials } = props.user;

const [home,setHome]=useState(true);
const [upload,setUpload]=useState(false);
const [login,setLogin]=useState(false);
const [register,setRegister]=useState(false);

const homeClick=()=>{
  setHome(true)
  setUpload(false)
  setLogin(false)
  setRegister(false)
}
const uploadClick=()=>{
  setHome(false)
  setUpload(true)
  setLogin(false)
  setRegister(false)
}
const loginClick=()=>{
  setHome(false)
  setUpload(false)
  setLogin(true)
  setRegister(false)
}
const registerClick=()=>{
  setHome(false)
  setUpload(false)
  setLogin(false)
  setRegister(true)
}


  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                
                 <h1 className='text-xl font-bold pb-3 text-center text-white'>Bloow Africa</h1>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  
                      <Link
                      
                        to='/#/'
                        className={classNames(
                          home ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                       onClick={homeClick}
                      >
                      Home
                      </Link>
                      <Link
                      
                        to='/upload'
                        className={classNames(
                          upload ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        onClick={uploadClick}

                      >
                      Upload
                      </Link>
                     {!authenticated?<> <Link
                      
                        to='/login'
                        className={classNames(
                          login ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        onClick={loginClick}

                      >
                      Login
                      </Link>
                      <Link
                      
                        to='/register'
                        className={classNames(
                          register ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        onClick={registerClick}

                      >
                     Register
                      </Link></>:<></>
                 }
                  </div>
                </div>
              </div>
              {authenticated?<div className="absolute inset-y-0 right-0 flex align-center items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          

                                                <h1 className='text-sm font-bold pb-3 pr-3 text-center text-white'>{credentials.username}</h1>

                                                <button
                  type="button" onClick={props.logoutUser}
                  className="bg-gray-800 p-1 text-sm font-bold pb-3 text-yellow-600 hover:text-white "
                >
                                                Logout
                </button>
              </div>:<></>}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
             
                <Disclosure.Button
                 
                  className={classNames(
                    home ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                 
                >
                  <Link to='/#/'  onClick={homeClick}>
                 Home</Link>
                </Disclosure.Button>
                <Disclosure.Button
               
                  className={classNames(
                    upload ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                
                >
                  <Link   to='/upload'   onClick={uploadClick}>
                 Upload</Link>
                </Disclosure.Button>
             { !authenticated?<>  <Disclosure.Button
                
                  className={classNames(
                    login ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                 
                >
                <Link   to='/login'  onClick={loginClick}>
                 Login</Link>
                </Disclosure.Button>
                <Disclosure.Button
               
                  className={classNames(
                    register ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                 
                >
                   <Link    to='/register'  onClick={registerClick}>
                   Register</Link>
               
                </Disclosure.Button></>:<></>}
           
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
Navbar.propTypes = {
  logoutUser:PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  
});
const mapActionsToProps = {
  logoutUser,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Navbar);
