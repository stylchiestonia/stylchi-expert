import axios from "axios";
import setAuthToken from "utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING} from "./types";


export const registerUser = (userData) => dispatch => {
  return new Promise((resolve, reject) => {
  axios
    .post("/register", userData)
    .then(res => 
      resolve(res))
      .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      reject(err)
    })
});
}
// Login - get user token
export const loginUser = userData => dispatch => {
  return new Promise((resolve, reject) => {
    axios
    .post("/expert/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      localStorage.setItem("userId", decoded.id);
      localStorage.setItem("userRole", decoded.role);
      localStorage.setItem("userEmail", decoded.email);
      dispatch(setCurrentUser(decoded));
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

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("userRole");
  localStorage.removeItem("userEmail");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};
