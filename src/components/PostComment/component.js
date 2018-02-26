import React from 'react'
import { connect } from 'react-redux'

import { Comment, Icon } from 'semantic-ui-react'
import { deleteComment, voteCommentDown, voteCommentUp } from '../../actions'

import { dateHelper } from '../../utils/dateHelper'

class PostComment extends React.Component {

    onHandleAction({ action }, id) {
        const { dislikeComment, likeComment, removeComment } = this.props
        action === 'Delete Post' && removeComment(id)
        action === 'Like' && likeComment(id)
        action === 'Dislike' && dislikeComment(id)
    }

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
                                        {/* <Icon name={action.name} alt={action.action} onClick={e => this.onHandleAction(action, id)} /> */}
                                    </Comment.Action>)
                        }
                    </Comment.Actions>
                </Comment.Content>
                <br />
            </Comment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeComment: id => dispatch(deleteComment(id)),
        likeComment: id => dispatch(voteCommentUp(id)),
        dislikeComment: id => dispatch(voteCommentDown(id))
    }
}

export default connect(null, mapDispatchToProps)(PostComment)