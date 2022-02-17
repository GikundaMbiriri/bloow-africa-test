import React , { useEffect ,useRef } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { HeartIcon } from '@heroicons/react/solid'
import { HeartIcon as Heart } from '@heroicons/react/outline'
import './card.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from  'react-loader-spinner'
import { getSongs,likeSong,unlikeSong } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import About from '../about/About'
import { Link } from 'react-router-dom';
function Card(props) {
  useEffect(() => {
    props.getSongs();
  }, []);
  const audioRefs=useRef([]);
  audioRefs.current=[];

  const { songs,  } = props.data;
  const { authenticated, likes } = props.user;

const likedSong=(song)=>{
  if(likes&& likes.find(like=>like.songId===song.songId)){
   
    return true;

  }
  else {
    
   

    return false;}

  
}
const likeSong=(song)=>{
  props.likeSong(song.songId)
}
const unlikeSong=(song)=>{
  props.unlikeSong(song.songId)
}
const addToRefs=(el)=>{
if(el && !audioRefs.current.includes(el)){
  audioRefs.current.push(el)
 
}
}


  return (
    <>
    <div className='md:w-2/5 pr-5 pt-5 mx-auto w-11/12 overflow-x-hidden'>
        <h1 className='text-2xl font-bold pb-3  text-center text-yellow-600'>Cool Songs</h1>
      
        {!!songs[0]?songs.map((song)=>
  <AudioPlayer ref={addToRefs}
  className=' h-55 my-5 drop-shadow-md hover:drop-shadow-xl '
  
   
    header={<div className='flex justify-between'><div className='w-1/2'>
      <h2 className='font-semibold  text-xl text-dark-blue'>{song.songName}<span className='text-dark-blue'> by</span>  <span className='text-lg text-dark-blue italic'>{song.artist}</span> </h2>
      </div><div className='flex justify-around items-center w-3/10 px-2'>
      {!authenticated?(<Link to='/login'><div data-testid='borderedHeart'><Heart className="h-6 w-6 text-black cursor-pointer" /></div></Link>):
        (likedSong(song)?
        (<HeartIcon className="h-6 w-6 text-red-700 cursor-pointer" data-testid='filledHeart' onClick={()=>unlikeSong(song)}/>):
        (<Heart className="h-6 w-6 text-black cursor-pointer" onClick={()=>likeSong(song)}/>))} <div className='text-red-700'>{song.likeCount}</div> 
       </div></div>}
 key={song.songId}
    src={song.songUrl}
    onPlay={e => audioRefs.current[0].handleMuteChange()}
   
  />
        ):songs.length==0?<div datat-testid='emptySongs'>No songs found</div>:
        <div  className='h-100 w-100 flex justify-around items-center' data-testid='loading'>
        <Audio
      className='w-50'
       color='black'
        ariaLabel='loading'
       
      />
    </div>
      }


  <div  className='block md:hidden'>
  <About />
  </div>
  </div>
    </>
  )
}


Card.propTypes = {
  getSongs: PropTypes.func.isRequired,
  likeSong: PropTypes.func.isRequired,
  unlikeSong: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  user:PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  data: state.data,
  user:state.user
});
const mapActionsToProps={
  getSongs,
  likeSong,
  unlikeSong
}
export default connect(mapStateToProps, mapActionsToProps)(Card);
