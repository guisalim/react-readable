import { connect } from 'react-redux'
import { denormalize } from 'normalizr'
import { getComments, getPost } from '../../../actions'
import { CommentSchema, PostSchema } from '../../../helpers/schemas'

const mapStateToProps = (state, { match }) => {
    const post = denormalize(state.views.post.post, PostSchema, state.entities)
    const comments = denormalize(state.views.comments.comments, [CommentSchema], state.entities)
    return {
        filter: match.params.post || '',
        post, comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getComments: (request) => dispatch(getComments(request)),
        getPost: (request) => dispatch(getPost(request))
    }
}

export default Component => {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}