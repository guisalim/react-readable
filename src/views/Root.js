import React from 'react'

import * as API from '../utils/ReadableAPI'

import { Grid } from 'semantic-ui-react'
import { Post } from '../components'

export default class Root extends React.Component {
    state = { posts: [], categories: [], categoryFilter: '' }

    componentDidMount() {
        API.getAllPosts().then(posts => this.setState({ posts }))
        API.getAllCategories().then(categories => this.setState({ categories }));
    }

    render() {
        const { posts } = this.state
        return (
            <Grid>
                <Grid.Column width={4}>
                </Grid.Column>
                <Grid.Column width={10}>
                    {
                        posts.map(post => <Post key={post.id} post={post} />)
                    }
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        )
    }
}