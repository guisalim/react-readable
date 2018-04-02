import { connect } from 'react-redux'
import { getComments } from '../../../../actions'
import { denormalize } from 'normalizr'
import { CommentSchema } from '../../../../helpers/schemas'

const mapStateToProps = state => {
    const comments = denormalize(state.views.comments.comments, [CommentSchema], state.entities)
    return { comments }
}

const mapDispatchToProps = dispatch => {
    return {
        getComments: (request) => dispatch(getComments(request))
    }
}

export default Component => {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}
