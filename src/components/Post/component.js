import React from 'react'
import { Comment, Icon, Segment } from 'semantic-ui-react'

import { dateHelper } from '../../utils/dateHelper'

const Post = props => {
    const { author, body, category, timestamp, title, voteScore } = props.post
    return (
        <Segment>
            <Comment.Group>
                <Comment>
                    <Comment.Content>
                        <Comment.Metadata>
                            <Comment.Author><Icon name='user' />{author}</Comment.Author>
                            <div>{dateHelper(timestamp)}</div>
                            <div>{category}</div>
                            <div>
                                <Icon name='star' />
                                {voteScore}
                            </div>
                        </Comment.Metadata>
                        <Comment.Text>
                            <p><b>{title}</b><br />{body}</p>
                        </Comment.Text>
                    </Comment.Content>
                </Comment>
            </Comment.Group>
        </Segment>
    )
}

export default Post