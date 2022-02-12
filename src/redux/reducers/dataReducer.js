import {
    SET_SONGS,
    LIKE_SONG,
    UNLIKE_SONG,
    LOADING_DATA,
    LOADING_UI,
    POST_SONG,
   
    STOP_LOADING_UI,
    
    CLEAR_DATA
  } from "../types";
  const initialState = {
    songs: {},
   
    
    loading: false,
  };
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOADING_DATA:
        return {
          ...state,
          loading: true,
        };
      case SET_SONGS:
        return {
          ...state,
          songs: action.payload,
          loading: false,
          
        };
     
    
      case LIKE_SONG:
      case UNLIKE_SONG:
        let index = state.songs.findIndex(
          (song) => song.songId == action.payload.songId
        );
        state.songs[index] = action.payload;
        return {
          ...state,
        };
        
    
    
      case POST_SONG:
        return {
          ...state,
          songs: [action.payload, ...state.songs],
        };
      case STOP_LOADING_UI:
        return {
          ...state,
          loading: false,
        };
      case LOADING_UI:
        return {
          ...state,
          loading: true,
        };
      case CLEAR_DATA:
        return {
          ...state,
          scream: {},
        };
      default:
        return state;
    }
  }
  