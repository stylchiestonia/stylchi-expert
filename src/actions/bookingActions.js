import axios from "axios"
import { GET_ERRORS, FETCH_BOOKINGS_REQUEST, FETCH_BOOKINGS_SUCCESS} from "./types";

export const getBookings = bookingData => dispatch => {
    dispatch({
        type:FETCH_BOOKINGS_REQUEST
    })
    axios
      .post("http://localhost:5000/api/expert/bookings", bookingData)
      .then(res => {
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
      .post("http://localhost:5000/api/expert/bookings/update", bookingData)
      .then(res => {
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

