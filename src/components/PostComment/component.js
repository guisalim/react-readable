import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

import { dateHelper } from '../../utils/dateHelper'

export default class PostComment extends React.Component {

    render() {
        const { author, body, timestamp, voteScore } = this.props.comment
        
        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'><Icon name='user' />{author}</Comment.Author>
                    <Comment.Metadata><div>{dateHelper(timestamp)}</div><div><Icon name='star' />{voteScore}</div></Comment.Metadata>
                    <Comment.Text> {body}</Comment.Text>
                </Comment.Content>
                <br />
            </Comment>
        )
    }
}