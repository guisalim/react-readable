import { connect } from 'react-redux'
import { getPosts } from '../../../../actions'
import { denormalize } from 'normalizr'
import { PostSchema } from '../../../../helpers/schemas'

const mapStateToProps = state => {
    const posts = denormalize(state.views.posts.posts, [PostSchema], state.entities) || []
    return { posts }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts())
    }
}

export default Component => {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}