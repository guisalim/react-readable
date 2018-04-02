import React from 'react'

import { Comment, Header } from 'semantic-ui-react'
import { CommentDetail } from '../'

const Component = props => {
    const { comments } = props
    return (
        <Comment.Group>
            <Header as='h3' dividing>Comments</Header>
            <Comment.Group>
                {comments && comments.map(comment => <CommentDetail key={comment.id} {...comment}/>)}
            </Comment.Group>
        </Comment.Group>
    )
}

export default Component
