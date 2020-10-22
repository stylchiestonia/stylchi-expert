import { FETCH_BOOKINGS_SUCCESS, FETCH_BOOKINGS_REQUEST} from "../actions/types";

const initialState = {
    loading: true,
    view: 'pending'
};

export default function(state = initialState, action) {
  switch (action.type) {
      case FETCH_BOOKINGS_SUCCESS:
        return {
            ...state,
            loading: false,
            payload: action.payload,
            status: action.payload.status
        }
        case FETCH_BOOKINGS_REQUEST:
            return {
                ...state,
                loading: true
              };
    default:
      return {
        ...state,
        view: 'pending'
      };
  }
}
