import React,{useEffect,useState} from 'react'
import { UserAddIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userAction";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
function Login(props) {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit=()=>{
      

        const userData = {
          email,
          password
        };
        console.log(userData)
        props.loginUser(userData, props.history);
    }
  return (
    <>
<div className='w-4/5 md:w-1/3 shadow-2xl m-auto mb-10 mt-5 py-5'>
<UserAddIcon className="h-12 w-12 mx-auto"/>
<h1 className='text-2xl font-bold pb-3 text-center text-dark-blue'>Login Here</h1>
<h1 className='text-center text-lg'>Remember Everything important</h1>
<div className="flex flex-col justify-center ml-8">
  <div className="mb-3 xl:w-96">
    <label for="exampleEmail0" className="form-label inline-block mb-2 text-gray-700"
      >Email input</label
    >
    <input
      type="email"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleEmail0"
      value={email}
onChange={(event)=>setEmail(event.target.value)}
      placeholder="Email input"
    />
  </div>
  <div className="mb-3 xl:w-96">
    <label for="examplePassword0" className="form-label inline-block mb-2 text-gray-700"
      >Password input</label
    >
    <input
      type="password"
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      value={password}
      onChange={(event)=>setPassword(event.target.value)}
      id="examplePassword0"
      placeholder="Password input"
    />
  </div>
  <div className="flex space-x-2 justify-center mb-3">
  <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleSubmit}>Login</button>
</div>

</div>
<div className='mb-3'>
<h1 className='text-center'>Don't have an account ?</h1>
<Link to="/register">
<h1 className='text-center text-blue-600 text-sm'>Register here</h1>
</Link>
</div>
</div>
    </>
  )
}

Login.propTypes = {
  
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
const mapActionsToProps = {
  loginUser,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(Login));