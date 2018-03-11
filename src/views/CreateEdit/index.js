import React from 'react'
import { connect } from 'react-redux'

import { getAllPosts, getAllCategories } from '../../actions'
import { NewPost } from '../../components'

class CreateEdit extends React.Component {
    componentDidMount() {
        const { allPosts, allCategories } = this.props
        allPosts()
        allCategories()
    }

    render() {
        const { categories, filter, edited } = this.props
        edited && console.log(`Edited >> ${edited}`)
        return (
            <NewPost categories={categories} filter={filter} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allPosts: () => dispatch(getAllPosts()),
        allCategories: () => dispatch(getAllCategories())
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || ''
    const edited = match.params.edited || ''
    return { ...state, filter, edited }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEdit)