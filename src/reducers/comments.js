import * as types from '../helpers/types'

export default function comments(state = {}, { type, payload }) {
    switch (type) {
        // cuidado com este get_comments, porque é chamado mais de uma vez e pode haver sobrescrição de payloads
        case types.GET_COMMENTS:
            return {
                ...state,
                ...payload
            }

        default:
            return state
    }
}
