import React, { useState,useEffect } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { uploadSong } from "../redux/actions/dataAction";
import { withRouter } from 'react-router-dom';
import {Loading, loading} from './Loading';
function Upload(props) {
    const {authenticated}=props.user;
    const [song,setSong]=useState({});
    const [error,setError]=useState('');
    const {loading}=props.data;

    useEffect(()=>{
console.log(authenticated)
        if(!authenticated){
props.history.push('/login')
        }
    },[authenticated])
    const handlesongChange=(event)=>{
        setSong(event.target.files[0]);
      
    
    }
    const handleSubmit=()=>{
        const formData = new FormData();
        if(song.name){
          formData.append("song", song, song.name);
       
          props.uploadSong(formData, props.history);
        }
     else{
     setError('Please select a song');
     }
    }
  return (
    <>
<div className='w-4/5 md:w-1/3 shadow-2xl m-auto mb-10 mt-5 py-8'>
<h1 className='text-2xl font-bold pb-3 text-center text-dark-blue'>Upload Song</h1>
<h1 className='text-center text-lg'>Music is Everything</h1>
<div className="flex flex-col justify-center ml-8">

  <div className="mb-3 xl:w-96">
    <label for="formFile" className="form-label inline-block mb-2 text-gray-700">Upload Song</label>
    <input 
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
      required
     onChange={handlesongChange}
      type="file" id="formFile"  
      accept='audio/*'
      />
      <h2 className='text-center text-lg text-red-600'>{error}</h2>
  </div>

  
  <div className="flex space-x-2 justify-center mb-3">
  <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleSubmit}>{loading?<Loading/>:<span>Upload</span>}</button>
</div>

</div>

</div>

    </>
  )
}
Upload.propTypes = {
    uploadSong: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => ({
    user: state.user,
    data: state.data,
  });
  export default connect(mapStateToProps,{uploadSong})(
    withRouter(Upload)
  );
