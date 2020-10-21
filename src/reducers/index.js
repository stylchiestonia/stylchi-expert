import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookingReducer from "./bookingsReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  bookings: bookingReducer,
  auth: authReducer,
  user: userReducer,
  errors: errorReducer
});
