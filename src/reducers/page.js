import { SET_YEAR } from '../constants/actions/Page';
import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/actions/Page';

const initialState = {
    year: 2018,
    photos: [],
    fetching: false
}

export default function page(state = initialState, action) {
    switch (action.type) {
        case SET_YEAR:
            return {
                ...state,
                year: action.payload
            }

        case GET_PHOTOS_REQUEST: 
            return {
                ...state,
                year: action.payload,
                fetching: true
            }

        case GET_PHOTOS_SUCCESS: 
            return {
                ...state,
                photos: action.payload,
                fetching: false
            }
            
        default:
            return state;
    }
    return state;
}