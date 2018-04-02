import merge from 'merge'

export default function entities(state = {}, { type, payload }) {
    switch (type) {
        
        case 'ENTITIES':
            return merge.recursive({}, state, payload)

        default:
            return state
    }
}