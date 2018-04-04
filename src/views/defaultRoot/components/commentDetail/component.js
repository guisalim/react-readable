import React from 'react'
import faker from 'faker'

import { dateHelper } from '../../../../helpers/dateHelper'
import { Comment, Icon } from 'semantic-ui-react'

const Component = props => {
    const { author, body, id, timestamp, voteScore } = props
    const { downVote, upVote } = props
    const avatar = faker.image.avatar()
    
    return (
        <Comment>
            <Comment.Avatar src={avatar} />
            <Comment.Content>
                <Comment.Author as='a'>{author}</Comment.Author>
                <Comment.Metadata>
                    <div>{dateHelper(timestamp)}</div>
                    <Comment.Actions>
                        <Comment.Action>
                            <Icon name='like' />
                            {` ${voteScore}`} Like(s)
                        </Comment.Action>
                    </Comment.Actions>
                </Comment.Metadata>
                <Comment.Text>{body}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action onClick={e => upVote(id)}>
                        <Icon name='thumbs up' /> Like</Comment.Action>
                    <Comment.Action onClick={e => downVote(id)}>
                        <Icon name='thumbs down' /> Dislike</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default Component
