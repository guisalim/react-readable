import React from 'react'

import * as API from '../../utils/ReadableAPI'
import { dateHelper } from '../../utils/dateHelper'

import { Comment, Icon, Segment } from 'semantic-ui-react'
import { PostComment } from '../'

export default class Post extends React.Component {

    state = { comments: [] }

    componentDidMount() {
        const { id } = this.props.post
        API.getComments(id).then(comments => this.setState({ comments }))
    }

    render() {
        const { author, body, category, timestamp, title, voteScore } = this.props.post
        const { comments } = this.state
        return (
            <Segment>
                <Comment.Group>
                    <Comment>
                        <Comment.Content>
                            <Comment.Author><Icon name='user' />{author}</Comment.Author>
                            <Comment.Metadata><div>{dateHelper(timestamp)}</div><div>{category}</div><div><Icon name='star' />{voteScore}</div></Comment.Metadata>
                            <Comment.Text><p><b>{title}</b><br />{body}</p></Comment.Text>
                            <Comment.Actions> <Comment.Action>Reply</Comment.Action></Comment.Actions>
                        </Comment.Content>
                        {comments.length > 0 && <Comment.Group>{comments.map(comment => !comment.deleted && <PostComment key={comment.id} comment={comment} />)}</Comment.Group>}
                    </Comment>
                </Comment.Group>
            </Segment>
        )
    }
}