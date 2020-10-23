import axios from "axios"
import { GET_ERRORS, FETCH_CATEGORIES_SUCCESS, CREATE_SERVICE_EXPERT, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_REQUEST, DELETE_SERVICE_EXPERT, UPDATE_SERVICE_EXPERT} from "./types";

axios.defaults.headers.common = {
    'Authorization': 'JWT ' + localStorage.jwtToken
  };
export const getCategories = () => dispatch => {
    axios
      .get("/categories")
      .then(res => {
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: res.data
        });
      })
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err
      })
      );
  };


  export const createExpertService = servicedata => dispatch => {
    dispatch({
      type:FETCH_SERVICES_REQUEST
    })
    axios
      .post("/expert/service/create", servicedata )
      .then(res => {
        dispatch({
            type: CREATE_SERVICE_EXPERT,
            payload: res.data
        });
      }).catch(err => dispatch({
        type: GET_ERRORS,
        payload: err
      }))
  };

  export const deleteExpertService = archive_service => dispatch => {
    dispatch({
      type:FETCH_SERVICES_REQUEST
    })
    axios
      .post("/expert/service/delete", archive_service)
      .then(res => {
        dispatch({
            type: DELETE_SERVICE_EXPERT,
            payload: res.data
        });
      }).catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };

  export const updateExpertService = updatedService => dispatch => {
    dispatch({
      type:FETCH_SERVICES_REQUEST
    })
    axios
      .post("/expert/service/update", updatedService )
      .then(res => {
        dispatch({
            type: UPDATE_SERVICE_EXPERT,
            payload: res.data
        });
      }).catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };

  export const getExpertServices = () => dispatch => {
    dispatch({
      type:FETCH_SERVICES_REQUEST
    })
    axios
      .post("/expert/services")
      .then(res => {
        dispatch({
            type: FETCH_SERVICES_SUCCESS,
            payload: res.data
        });
      })
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err
      })
      );
  };