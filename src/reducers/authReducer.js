import { SET_CURRENT_USER, USER_LOADING, USER_REGISTERED } from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        loading: false
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };

    case USER_REGISTERED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
