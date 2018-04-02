import React from 'react'
import faker from 'faker'

import { dateHelper } from '../../../../helpers/dateHelper'
import { Comment } from 'semantic-ui-react'

const Component = props => {
    const { author, body, timestamp, voteScore } = props
    const avatar = faker.image.avatar()
    return (
        <Comment>
            <Comment.Avatar src={avatar} />
            <Comment.Content>
                <Comment.Author as='a'>{author}</Comment.Author>
                <Comment.Metadata>
                    <div>{dateHelper(timestamp)}</div>
                </Comment.Metadata>
                <Comment.Text>{body}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>{voteScore} Like(s)</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default Component
