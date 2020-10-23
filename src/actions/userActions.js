import axios from "axios"
import { GET_ERRORS,REQUEST_USER_PROFILE, FETCH_BANK_SUCCESS, FETCH_USER_SUCCESS, FETCH_SCEHDUALE_SUCCESS, FETCH_Gallery_SUCCESS } from "./types";

axios.defaults.headers.common = {
  'Authorization': 'JWT ' + localStorage.jwtToken
};
export const getCurrentExpert = user => dispatch => {
  dispatch({
    type:REQUEST_USER_PROFILE
})
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
          payload: err
        })
      );
  };
export const updateCurrentExpert = currentUser => dispatch => {
    axios
      .post("current/update", currentUser)
      .then(res => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };
  export const getExpertScheduale = expert => dispatch => {
    axios
      .post("expert/scheduale", expert)
      .then(res => {
        dispatch({
            type: FETCH_SCEHDUALE_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };
  export const updateExpertScheduale = scheduale => dispatch => {
    axios
      .post("expert/scheduale/update", scheduale)
      .then(res => {
        dispatch({
            type: FETCH_SCEHDUALE_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };
  export const uploadImage = imageData => dispatch => {
      console.log('-----hello--------', imageData)
    axios
      .post("expert/gallery/upload", imageData,
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
          payload: err
        })
      );
  };
  export const getExpertGallery = expertId => dispatch => {
    axios
      .post("expert/gallery", expertId)
      .then(res => {
        dispatch({
            type: FETCH_Gallery_SUCCESS,
            payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };
  export const getBankInfo = () => dispatch => {
    dispatch({
      type:REQUEST_USER_PROFILE
  })
      axios
        .post("/user/bank/info" )
        .then(res => {
          dispatch({
              type: FETCH_BANK_SUCCESS,
              payload: res.data
          });
        })
        .catch(err =>
          dispatch({
            type: GET_ERRORS,
            payload: err
          })
        );
    };
    export const createOrUpdateBankInfo = (bankInfo) => dispatch => {
      dispatch({
        type:REQUEST_USER_PROFILE
    })
        axios
          .post("/user/bank/update", bankInfo )
          .then(res => {
            dispatch({
                type: FETCH_BANK_SUCCESS,
                payload: res.data
            });
          })
          .catch(err =>
            dispatch({
              type: GET_ERRORS,
              payload: err
            })
          );
      };
