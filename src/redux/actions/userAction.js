import {
    SET_USER,
    SET_ERRORS,
    SET_AUTHENTICATED,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_UNAUTHENTICATED,
    LOADING_USER,
  } from "../types";
  import axios from "axios";
  export const loginUser = (userData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post(
        "https://us-central1-pizzesadmin.cloudfunctions.net/api/login",
        userData
      )
      .then((res) => {
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem("FBIdToken", FBIdToken);
        axios.defaults.headers.common["Authorization"] = FBIdToken;
         dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: SET_AUTHENTICATED });
        history.push("/");
      })
      .catch((err) => {
        
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      });
  };
  export const signupUser = (newUserData, history) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    axios
      .post("https://us-central1-pizzesadmin.cloudfunctions.net/api/signup", newUserData)
      .then((res) => {
        const FBIdToken = `Bearer ${res.data.token}`;
        localStorage.setItem("FBIdToken", FBIdToken);
        axios.defaults.headers.common["Authorization"] = FBIdToken;
        dispatch(getUserData());
        dispatch({ type: CLEAR_ERRORS });
        dispatch({ type: SET_AUTHENTICATED });
        history.push("/");
      })
      .catch((err) => {
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      });
  };
  export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("FBIdToken");
    delete axios.defaults.headers.common["Authorization"];
    dispatch({ type: SET_UNAUTHENTICATED });
  };
  export const getUserData = () => (dispatch) => {
    dispatch({ type: LOADING_USER });
    axios
      .get("/getuser")
      .then((res) => {
        dispatch({
          type: SET_USER,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

 
  