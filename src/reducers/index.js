import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookingReducer from "./bookingsReducer";
import userReducer from "./userReducer";
import serviceReducer from "./serviceReducers";
import errorReducer from "./errorReducer";

export default combineReducers({
  bookings: bookingReducer,
  auth: authReducer,
  user: userReducer,
  service: serviceReducer,
  errors: errorReducer
});
