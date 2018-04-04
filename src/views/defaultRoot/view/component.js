import React from 'react'

import { PostList, PostNew, Sidebar } from '../components'
import { Grid } from 'semantic-ui-react'

const Component = props => {
    return (
        <Grid stackable columns={3}>
            <Grid.Column width={4}>
                <Sidebar {...props} />
            </Grid.Column>
            <Grid.Column width={10}>
                <PostNew {...props} />
                <PostList {...props} />
            </Grid.Column>
            <Grid.Column width={2} />
        </Grid >
    )
}

export default Component