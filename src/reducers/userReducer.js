import { FETCH_USER_SUCCESS, FETCH_SCEHDUALE_SUCCESS, FETCH_Gallery_SUCCESS} from "../actions/types";

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
      case FETCH_USER_SUCCESS:
        return {
            ...state,
            payload: action.payload
        }
    case FETCH_SCEHDUALE_SUCCESS:
    return {
        ...state,
        scheduale: action.payload
    }
    case FETCH_Gallery_SUCCESS:
        return {
            ...state,
            gallery: action.payload
        }
    default:
        return state;
  }
}
