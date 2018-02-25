import React from 'react'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'

import { addNewPost } from '../../actions'

import { Form, Header, Input, TextArea } from 'semantic-ui-react'



class NewPost extends React.Component {
    state = { title: '', body: '', author: '', category: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
        const { title, body, author, category } = this.state

        const response = {
            author: author === ''
                ? 'Anonimous'
                : author,
            body,
            category, 
            id: uuidv1(),
            title,
            timestamp: new Date().getTime()
        }
        this.props.addPost(response)
    }

    render() {
        const { title, body, author } = this.state
        const { categories } = this.props

        const options = categories.reduce((acc, category) => {
                return [...acc, {
                    key: category.path,
                    value: category.path,
                    name: category.path,
                    text: category.name
                }]
            },[])

        return (
            <div>
                <Header as='h2'>
                    <Header.Content>New Post</Header.Content>
                </Header>
                <Form onSubmit={this.handleSubmit} size='mini'>
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

                    <Form.Group widths='equal'>
                        <Form.Select
                            name='category'
                            placeholder='Categories'
                            options={options}
                            onChange={this.handleChange} />

                        <Form.Input
                            control={Input}
                            placeholder='Author'
                            name='author'
                            value={author}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Button content='Submit' />
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addNewPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)