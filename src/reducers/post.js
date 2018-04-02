import * as types from '../helpers/types'

export default function post(state = {}, { type, payload }) {
  switch (type) {
    case types.GET_POST:
      return {
        ...state,
        ...payload
      }
    
    default:
      return state
  }
}