import React from 'react'
import { connect } from 'react-redux'

import * as API from '../../utils/ReadableAPI'
import { dateHelper } from '../../utils/dateHelper'
import { deletePost, votePostDown, votePostUp } from '../../actions'

import { Comment, Icon, Segment } from 'semantic-ui-react'
import { PostComment } from '../'

class Post extends React.Component {

    state = { comments: [] }

    componentDidMount() {
        const { id } = this.props.post
        API.getComments(id).then(comments => this.setState({ comments }))
    }

    onHandleAction({ action }, id) {
        const { dislikePost, likePost, removePost } = this.props
        action === 'Delete Post' && removePost(id)
        action === 'Like' && likePost(id)
        action === 'Dislike' && dislikePost(id)
    }

    render() {
        const { id, author, body, category, timestamp, title, voteScore } = this.props.post
        const { comments } = this.state

        const actions = [
            { action: 'Like', name: 'thumbs up' },
            { action: 'Dislike', name: 'thumbs down' },
            { action: 'Reply', name: 'reply' },
            { action: 'Delete Post', name: 'trash' }
        ]

        return (
            <Segment>
                <Comment.Group>
                    <Comment>
                        <Comment.Content>
                            <Comment.Author as='a'><Icon name='user' />{author}</Comment.Author>
                            <Comment.Metadata><div>{dateHelper(timestamp)}</div><div>{category}</div><div><Icon name='star' />{voteScore || 0}</div></Comment.Metadata>
                            <Comment.Text><p><b>{title}</b><br />{body}</p></Comment.Text>
                            <Comment.Actions>
                                {actions
                                    .map(
                                        (action, index) =>
                                            <Comment.Action key={index}>
                                                <Icon name={action.name} alt={action.action} onClick={e => this.onHandleAction(action, id)} />
                                            </Comment.Action>)
                                }
                            </Comment.Actions>
                        </Comment.Content>
                        {comments.length > 0 && <Comment.Group>{comments.map(comment => !comment.deleted && <PostComment key={comment.id} comment={comment} />)}</Comment.Group>}
                    </Comment>
                </Comment.Group>
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = dispatch => {
    return {
        removePost: id => dispatch(deletePost(id)),
        likePost: id => dispatch(votePostUp(id)),
        dislikePost: id => dispatch(votePostDown(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)