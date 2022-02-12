import React , { useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { HeartIcon,ShareIcon } from '@heroicons/react/solid'
import { HeartIcon as Heart } from '@heroicons/react/outline'
import './card.css'
import { getSongs,likeSong,unlikeSong } from "../../redux/actions/dataAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import About from '../About'
function Card(props) {
  useEffect(() => {
    props.getSongs();
  }, []);
  const { songs, loading } = props.data;
  const { authenticated, likes } = props.user;

// const likeIcon = authenticated?()
  console.log(songs)
  return (
    <>
    <div className='md:w-2/5 pr-5 pt-5 w-full'>
        <h1 className='text-2xl font-bold pb-3 text-center text-dark-blue'>Cool Songs</h1>
        {songs[0]?songs.map((song)=>
  <AudioPlayer
  className=' h-55 my-5'
  
   
    header={<div className='flex justify-between'><div className='w-1/2'><h2 className='font-semibold  text-xl text-dark-blue'>{song.songName} by </h2><p className='text-lg  italic'>{song.artist}</p></div><div className='flex justify-around w-1/5'> <HeartIcon className="h-6 w-6 text-purple"/><ShareIcon className="h-6 w-6 text-purple"/></div></div>}
 key={song.songId}
    src={song.songUrl}
    onPlay={e => console.log("onPlay")}
   
  />
        ):<h1>loading</h1>}


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
