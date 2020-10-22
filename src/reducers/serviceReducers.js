import { FETCH_CATEGORIES_SUCCESS, CREATE_SERVICE_EXPERT, FETCH_SERVICES_SUCCESS } from "../actions/types";

const initialState = {
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES_SUCCESS:
            return {
                loading: false,
                categories: action.payload
            }
            case FETCH_SERVICES_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    services: action.payload
                }    
        case CREATE_SERVICE_EXPERT:
            return {
                ...state,
                loading: false
            }
        default:
            return {
                ...state
            };
    }
}
