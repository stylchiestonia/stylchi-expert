import { FETCH_USER_SUCCESS, FETCH_BANK_SUCCESS, FETCH_SCEHDUALE_SUCCESS, FETCH_Gallery_SUCCESS, REQUEST_USER_PROFILE } from "../actions/types";

const initialState = {
    loading: true
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
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
        case FETCH_BANK_SUCCESS:
            return {
                ...state,
                bankInfo: action.payload
            }
        case REQUEST_USER_PROFILE:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}
