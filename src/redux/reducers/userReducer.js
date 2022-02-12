
import {
    SET_USER,
  
    LOADING_USER,
    SET_AUTHENTICATED,
    SET_UNAUTHENTICATED,
    LIKE_SONG,
    UNLIKE_SONG,
  } from "../types";
  
  const initialState = {
    authenticated: false,
    credentials: {},
    loading: false,
    likes: [],
  };
  export default function (state = initialState, action) {
    switch (action.type) {
      case SET_AUTHENTICATED:
        return {
          ...state,
          authenticated: true,
        };
      case SET_UNAUTHENTICATED:
        return initialState;
      case SET_USER:
        return {
          authenticated: true,
          loading: false,
          ...action.payload,
        };
  
      case LOADING_USER:
        return {
          ...state,
          loading: true,
        };
      case LIKE_SONG:
        return {
          ...state,
          likes: [
            ...state.likes,
            {
              username: state.credentials.username,
              songId: action.payload.songId,
            },
          ],
        };
      case UNLIKE_SONG:
        return {
          ...state,
          likes: state.likes.filter(
            (like) => like.songId !== action.payload.songId
          ),
        };
      default:
        return state;
    }
  }