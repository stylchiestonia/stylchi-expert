import axios from "axios"
import { GET_ERRORS, FETCH_CATEGORIES_SUCCESS, CREATE_SERVICE_EXPERT, FETCH_SERVICES_SUCCESS} from "./types";

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
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };


  export const createExpertService = servicedata => dispatch => {
    axios
      .post("/expert/service/create", servicedata )
      .then(res => {
        dispatch({
            type: CREATE_SERVICE_EXPERT,
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

  export const getExpertServices = () => dispatch => {
    axios
      .post("/expert/services")
      .then(res => {
        dispatch({
            type: FETCH_SERVICES_SUCCESS,
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