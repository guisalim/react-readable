import { connect } from 'react-redux'
import { downPost, upPost } from '../../../../actions'

const mapDispatchToProps = dispatch => {
    return {
        downVote: (request) => dispatch(downPost(request)),
        upVote: (request) => dispatch(upPost(request))
    }
}

export default Component => {
    return connect (null, mapDispatchToProps)(Component)
}