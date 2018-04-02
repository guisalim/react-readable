import { connect } from 'react-redux'
import { getCategories } from '../../../../actions'
import { denormalize } from 'normalizr'
import { CategorySchema } from '../../../../helpers/schemas'

const mapStateToProps = (state) => {
    const categories = denormalize(state.categories.categories, [CategorySchema], state.entities) || []
    return { categories }
}

const dispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories())
    }
}

export default Component => {
    return connect(mapStateToProps, dispatchToProps)(Component)
}