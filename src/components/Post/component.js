import React from 'react'
import { connect } from 'react-redux'

import { dateHelper } from '../../utils/dateHelper'
import { deletePost, getComments, votePostDown, votePostUp } from '../../actions'

import { Comment, Form, Icon, Input, Segment, TextArea } from 'semantic-ui-react'
import { PostComment } from '../'

class Post extends React.Component {

    state = { commentsVisible: false, newCommentAuthor: '', newCommentBody: '', newCommentVisible: false }

    componentDidMount() {
        const { id } = this.props.post
        this.props.getComments(id)
    }

    onHandleAction({ action }, id) {
        const { dislikePost, likePost, removePost } = this.props
        const { newCommentVisible } = this.state
        action === 'Delete Post' && removePost(id)
        action === 'Like' && likePost(id)
        action === 'Dislike' && dislikePost(id)
        action === 'Reply' && this.setState({ newCommentVisible: !newCommentVisible })
    }

    onHandleChange = (e, { name, value }) => this.setState({ [name]: value })

    onHandleSubmit = e => {
        e.preventDefault()
        console.log(`Submited to the post - ${this.props.post.id} -\n>>>> ${this.state.newCommentBody}\n\n - by ${this.state.newCommentAuthor}`)
        this.setState({ newCommentAuthor: '', newCommentBody: '' })
    }

    render() {
        const { comments, post } = this.props
        const { commentsVisible, newCommentAuthor, newCommentBody, newCommentVisible } = this.state
        const { id, author, body, category, timestamp, title, voteScore } = post

        const filteredComments = comments.filter(comment => comment.parentId === id)

        const actions = [
            { action: 'Like', name: 'thumbs up' },
            { action: 'Dislike', name: 'thumbs down' },
            { action: 'Reply', name: 'reply' },
            { action: 'Edit', name: 'edit' },
            { action: 'Delete', name: 'trash' }
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
                                {
                                    actions
                                        .map(
                                            (action, index) =>
                                                <Comment.Action key={index}>
                                                    <Icon name={action.name} alt={action.action} onClick={e => this.onHandleAction(action, id)} />
                                                </Comment.Action>)
                                }
                                {
                                    filteredComments.length > 0 &&
                                    <Comment.Action onClick={e => this.setState({ commentsVisible: !commentsVisible })}>
                                        <Icon
                                            name='comment' alt='Comments'
                                            disabled={commentsVisible} />
                                    </Comment.Action>
                                }
                            </Comment.Actions>
                            {
                                commentsVisible &&
                                <Comment.Group>{
                                    filteredComments.map(comment => !comment.deleted && <PostComment key={comment.id} comment={comment} />)}
                                </Comment.Group>
                            }
                            {
                                newCommentVisible &&
                                <Form onSubmit={this.onHandleSubmit} size='mini'>
                                    <br />
                                    <Form.Input
                                        control={TextArea}
                                        placeholder='Add a comment'
                                        name='newCommentBody'
                                        value={newCommentBody}
                                        onChange={this.onHandleChange} />

                                    <Form.Input
                                        control={Input}
                                        placeholder='Author'
                                        name='newCommentAuthor'
                                        value={newCommentAuthor}
                                        onChange={this.onHandleChange} />

                                    <Form.Button fluid content='Submit' />
                                </Form>
                            }
                        </Comment.Content>
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
        getComments: post => dispatch(getComments(post)),
        removePost: id => dispatch(deletePost(id)),
        likePost: id => dispatch(votePostUp(id)),
        dislikePost: id => dispatch(votePostDown(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)