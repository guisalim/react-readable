import * as TYPES from '../helpers/types'

export default function categories(state = {}, {type, payload}) {
  switch (type) {
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        ...payload
      }

    default:
      return state
  }
}
