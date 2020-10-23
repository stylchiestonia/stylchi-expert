import { FETCH_CATEGORIES_SUCCESS, CREATE_SERVICE_EXPERT, FETCH_SERVICES_SUCCESS, FETCH_SERVICES_REQUEST, DELETE_SERVICE_EXPERT, UPDATE_SERVICE_EXPERT } from "../actions/types";

const initialState = {
    loading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload
            }
        case FETCH_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
                services: action.payload
            }
        case FETCH_SERVICES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_SERVICE_EXPERT:
            return {
                ...state,
                loading: false,
                services: action.payload
            }
            case UPDATE_SERVICE_EXPERT:
                return {
                    ...state,
                loading: false,
                services: action.payload
                }
            case DELETE_SERVICE_EXPERT:
                return {
                    ...state,
                loading: false,
                services: action.payload
                }
        default:
            return {
                ...state
            };
    }
}
