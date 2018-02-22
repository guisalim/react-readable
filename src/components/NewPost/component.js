import React from 'react'
import { connect } from 'react-redux'

import { addNewPost } from '../../actions'

import { Form, Header, Input, TextArea } from 'semantic-ui-react'

class NewPost extends React.Component {
    state = { title: '', body: '', category: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
        const { title, body } = this.state
        this.props.addPost({ title, body })
    }

    render() {
        const { title, body } = this.state
        return (
            <div>
                <Header as='h2'>
                    <Header.Content>New Post</Header.Content>
                </Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        control={Input}
                        placeholder='Title'
                        name='title'
                        value={title}
                        onChange={this.handleChange} />

                    <Form.Input
                        control={TextArea}
                        placeholder='Description'
                        name='body'
                        value={body}
                        onChange={this.handleChange} />

                    <Form.Button content='Submit' />
                </Form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addNewPost(post))
    }
}

export default connect(null, mapDispatchToProps)(NewPost)