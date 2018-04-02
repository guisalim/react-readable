import { connect } from 'react-redux'
import { denormalize } from 'normalizr'
import { getComments, getPost } from '../../../../actions'
import { CommentSchema, PostSchema } from '../../../../helpers/schemas';

const mapStateToProps = (state, props) => {
    const post = denormalize(state.views.post.post, PostSchema, state.entities)
    const comments = denormalize(state.views.comments.comments, [CommentSchema], state.entities)
    return { comments, post }
}

const dispatchToProps = dispatch => {
    return {
        getPost: (request) => dispatch(getPost(request)),
        getComments: (request) => dispatch(getComments(request))
    }
}

export default Component => {
    return connect(mapStateToProps, dispatchToProps)(Component)
}