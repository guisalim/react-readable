import { connect } from 'react-redux'
import { downVote, upVote } from '../../../../actions'

const mapDispatchToProps = dispatch => {
    return {
        downVote: (request) => dispatch(downVote(request)),
        upVote: (request) => dispatch(upVote(request))
    }
}

export default Component => {
    return connect (null, mapDispatchToProps)(Component)
}