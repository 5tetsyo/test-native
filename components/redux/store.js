import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";


const initialState = {
    photos: []
}
export const GET_PHOTO = 'GET_PHOTO'
const photoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTO:
            return {...state, photos: [...action.payload]};
        default:
            return state;
    }
}
export const addPhotos = (payload) => ({type: GET_PHOTO, payload});

export const store = createStore(photoReducer, applyMiddleware(thunk))