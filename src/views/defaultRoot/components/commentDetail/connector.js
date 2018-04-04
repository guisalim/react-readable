import { connect } from 'react-redux'
import { downComment, upComment } from '../../../../actions'

const mapDispatchToProps = dispatch => {
    return {
        downVote: (request) => dispatch(downComment(request)),
        upVote: (request) => dispatch(upComment(request))
    }
}

export default Component => {
    return connect(null, mapDispatchToProps)(Component)
}