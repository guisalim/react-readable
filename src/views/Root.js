import React from 'react'
import { connect } from 'react-redux'

import { getAllPosts } from '../actions'

import * as API from '../utils/ReadableAPI'

import { Grid, Segment } from 'semantic-ui-react'
import { NewPost, Post, SideBar } from '../components'

class Root extends React.Component {
    state = { posts: [], categories: [], categoryFilter: '' }

    componentDidMount() {
        API.getAllPosts().then(posts => this.setState({ posts }))
        API.getAllCategories().then(categories => this.setState({ categories }))
        this.props.getAllPosts()
    }

    render() {
        const { categories, posts } = this.state
        console.log(this.props)
        return (
            <Grid>
                <Grid.Column width={4}>
                    <SideBar options={categories} />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Segment>
                        <NewPost categories={categories} />
                    </Segment>
                    <Segment>
                        {posts.map(post => !post.deleted && <Post key={post.id} post={post} />)}
                    </Segment>
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        allPosts: () => dispatch(getAllPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)