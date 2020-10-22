import axios from "axios"
import { GET_ERRORS, FETCH_BOOKINGS_REQUEST, FETCH_BOOKINGS_SUCCESS} from "./types";
axios.defaults.headers.common = {
  'Authorization': 'JWT ' + localStorage.jwtToken
};
export const getBookings = bookingData => dispatch => {
    dispatch({
        type:FETCH_BOOKINGS_REQUEST
    })
    axios
      .post("expert/bookings", bookingData)
      .then(res => {
          res.data.status = bookingData.status;
        dispatch({
            type: FETCH_BOOKINGS_SUCCESS,
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
export const updateBooking = bookingData => dispatch => {
    dispatch({
        type:FETCH_BOOKINGS_REQUEST
    })
    axios
      .post("expert/bookings/update", bookingData)
      .then(res => {
        res.data.status = bookingData.status;
        dispatch({
            type: FETCH_BOOKINGS_SUCCESS,
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

