import { connect } from 'react-redux'
import { denormalize } from 'normalizr'
import { createPost } from '../../../../actions'
import { CategorySchema } from '../../../../helpers/schemas'

const mapStateToProps = state => {
    const categories = denormalize(state.categories.categories, [CategorySchema], state.entities) || []
    return { categories }
}

const mapDispatchToProps = dispatch => {
    return {
        createPost: (response) => dispatch(createPost(response))
    }
}

export default Component => {
    return connect(mapStateToProps, mapDispatchToProps)(Component)
}