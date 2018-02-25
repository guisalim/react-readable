import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

import { dateHelper } from '../../utils/dateHelper'

export default class PostComment extends React.Component {

    render() {
        const { author, body, timestamp, voteScore } = this.props.comment

        const actions = [
            { action: 'Like', name: 'thumbs up' },
            { action: 'Dislike', name: 'thumbs down' },
            { action: 'Delete Comment', name: 'trash' }
        ]

        return (
            <Comment>
                <Comment.Content>
                    <Comment.Author as='a'><Icon name='user' />{author}</Comment.Author>
                    <Comment.Metadata><div>{dateHelper(timestamp)}</div><div><Icon name='star' />{voteScore}</div></Comment.Metadata>
                    <Comment.Text> {body}</Comment.Text>
                    <Comment.Actions>
                        {actions
                            .map(
                                (action, index) =>
                                    <Comment.Action key={index}>
                                        <Icon name={action.name} alt={action.action} onClick={e => console.log(action.action)} />
                                    </Comment.Action>)
                        }
                    </Comment.Actions>
                </Comment.Content>
                <br />
            </Comment>
        )
    }
}