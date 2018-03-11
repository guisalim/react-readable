import React from 'react'
import { connect } from 'react-redux'

import { getAllPosts, getAllCategories } from '../../actions'

import { Grid, Segment } from 'semantic-ui-react'
import { NewPost, Post, SideBar } from '../../components'

class Root extends React.Component {

    componentDidMount() {
        const { allPosts, allCategories } = this.props
        allPosts()
        allCategories()
    }

    render() {
        const { categories, posts, filter } = this.props
        const filteredPosts = filter === '' ? posts : posts.filter(post => post.category === filter)
        return (
            <Grid stackable columns={3}>

                <Grid.Column width={4}>
                    <SideBar options={categories} filter={filter} />
                </Grid.Column>

                <Grid.Column width={10}>
                    <Segment>
                        <NewPost categories={categories} filter={filter} />
                    </Segment>

                    <Segment>{
                        filteredPosts.length
                            ? filteredPosts.map(post => post.id && <Post key={post.id} post={post} />)
                            : <h3>You don't have any posts {filter !== '' && `in this category`}</h3>
                    }
                    </Segment>

                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        )
    }
}

const mapStateToProps = (state, { match }) => {
    const filter = match.params.filter || ''
    return { ...state, filter }
}

const mapDispatchToProps = dispatch => {
    return {
        allPosts: () => dispatch(getAllPosts()),
        allCategories: () => dispatch(getAllCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)