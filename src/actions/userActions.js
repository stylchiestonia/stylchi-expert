import axios from "axios"
import { GET_ERRORS,REQUEST_USER_PROFILE, FETCH_BANK_SUCCESS, FETCH_USER_SUCCESS, FETCH_SCEHDUALE_SUCCESS, FETCH_Gallery_SUCCESS } from "./types";
import { setLocalization } from "middleware/localization"
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
          payload: err.response.data
        })
      );
  };
export const updateCurrentExpert = currentUser => dispatch => {
  return new Promise((resolve, reject) => {
    axios
      .post("current/update", currentUser)
      .then(res => {
        dispatch({
            type: FETCH_USER_SUCCESS,
            payload: res.data
        });
        resolve(res)
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        reject(err)
      }
      );
})
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
          payload: err.response.data
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
          payload: err.response.data
        })
      );
  };
  export const uploadImage = imageData => dispatch => {
    return new Promise((resolve, reject) => {
    axios
      .post("expert/gallery/upload", imageData,
      { headers: { 'content-type': 'multipart/form-data' }})
      .then(res => {
        dispatch({
          type: FETCH_Gallery_SUCCESS,
          payload: res.data
        });
        resolve(res)
      })
      .catch(err => {   
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        reject(err)
      }  
      );
  });
}
  export const updateImage = images => dispatch => {
    return new Promise((resolve, reject) => {
    axios
      .post("expert/gallery/update", images)
      .then(res => {
       resolve(res);
      })
      .catch(err => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
        reject(err)
      }
      );
  })
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
          payload: err.response.data
        })
      );
  };
  export const getBankInfo = () => dispatch => {
    return new Promise((resolve, reject) => {
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
          resolve(res);
        })
        .catch(err => {
          dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          })
          reject(err);
        }
        );
  })}
    export const createOrUpdateBankInfo = (bankInfo) => dispatch => {
      return new Promise((resolve, reject) => {
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
            resolve(res);
          })
          .catch(err => {
            dispatch({
              type: GET_ERRORS,
              payload: err.response.data
            })
            reject(err);
          }
          );
      })}


      export const changeCurrentLocalization = (lang, reload = true) => dispatch => {
        return new Promise((resolve, reject) => {
            axios
              .post("/user/locale", lang)
              .then(res =>
              dispatch({
                type: FETCH_BANK_SUCCESS,
                payload: res.data
            })
            ).then(() => {
            setLocalization(lang)
            if (reload) {
              window.location.reload();
            }
            resolve()
      }).catch(error =>
        reject(error)
      )})
  } 