import * as types from '../helpers/types'

export default function posts(state = {}, { type, payload }) {
  switch (type) {
    case types.GET_POSTS:
      return {
        ...state,
        ...payload
      }

    case types.CREATE_POST:
      const result = state.posts.concat(payload)
      return {
        ...state,
        posts: result
      }
    
    default:
      return state
  }
}
