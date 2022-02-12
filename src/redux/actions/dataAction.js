import {
    SET_SONGS,
    LOADING_DATA,
    LIKE_SONG,
    UNLIKE_SONG,
    CLEAR_ERRORS,
  
    CLEAR_DATA,
  } from "../types";
  import axios from "axios";


  export const getSongs = () => (dispatch) => {
    dispatch({ type: LOADING_DATA });
    axios
      .get("https://us-central1-safarixpertsapp.cloudfunctions.net/api/songs")
      .then((res) => {
        dispatch({
          type: SET_SONGS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: SET_SONGS,
          payload: {},
        });
      });
  };

  
  export const likeSong = (songId) => (dispatch) => {
    axios
      .get(
        `https://us-central1-safarixpertsapp.cloudfunctions.net/api/like/${songId}`
      )
      .then((res) => {
        dispatch({
          type: LIKE_SONG,
          payload: res.data,
        });
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  };
  export const unlikeSong = (songId) => (dispatch) => {
    axios
      .get(`https://us-central1-safarixpertsapp.cloudfunctions.net/api/unlike/${songId}`)
      .then((res) => {
        dispatch({
          type: UNLIKE_SONG,
          payload: res.data,
        });
        console.log(res.data)
  
      })
      .catch((err) => console.log(err));
  };
 


  export const clearErrors = () => (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  export const clearData = () => (dispatch) => {
    dispatch({ type: CLEAR_DATA });
  };
  export const uploadSong = (formData,history) => (dispatch) => {
    axios
      .post(
        "https://us-central1-safarixpertsapp.cloudfunctions.net/api/uploadsong",
        formData
      )
      .then(() => {
        console.log(formData);
        history.push('/');

      })
      .catch((err) => {
        console.log(err);
      });
  };
  