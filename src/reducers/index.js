import { combineReducers } from 'redux'

import {
    ADD_NEW_POST, GET_POSTS
} from '../actions'

function posts(state = { posts: [], categories: [] }, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: [...state.posts, action.posts]
            }
        case ADD_NEW_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        default:
            return state
    }
}

export default combineReducers({
    posts
})