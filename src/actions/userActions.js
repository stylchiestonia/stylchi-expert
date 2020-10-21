import axios from "axios"
import { GET_ERRORS, FETCH_USER_SUCCESS, FETCH_SCEHDUALE_SUCCESS, FETCH_Gallery_SUCCESS } from "./types";

const token = localStorage.jwtToken;
axios.defaults.headers.common = {
    'Authorization': 'Bearer ' + token
};
export const getCurrentExpert = user => dispatch => {
    axios
      .post("/current", user )
      .then(res => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


export const updateCurrentExpert = currentUser => dispatch => {
    axios
      .post("http://localhost:9000/.netlify/functions/app/current/update", currentUser)
      .then(res => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  export const getExpertScheduale = expert => dispatch => {
    axios
      .post("http://localhost:9000/.netlify/functions/app/expert/scheduale", expert)
      .then(res => {
        dispatch({
            type: FETCH_SCEHDUALE_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  export const updateExpertScheduale = scheduale => dispatch => {
    axios
      .post("http://localhost:9000/.netlify/functions/app/expert/scheduale/update", scheduale)
      .then(res => {
        dispatch({
            type: FETCH_SCEHDUALE_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
  export const uploadImage = imageData => dispatch => {
      console.log('-----hello--------', imageData)
    axios
      .post("http://localhost:5000/api/expert/gallery/upload", imageData,
      { headers: { 'content-type': 'multipart/form-data' }})
      .then(res => {
        // dispatch({
        //     type: FETCH_SCEHDUALE_SUCCESS,
        //     payload: res.data
        // });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };

  export const getExpertGallery = expertId => dispatch => {
    axios
      .post("http://localhost:9000/.netlify/functions/app/expert/gallery", expertId)
      .then(res => {
        dispatch({
            type: FETCH_Gallery_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
