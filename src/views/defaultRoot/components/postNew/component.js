import React from 'react'

import { Form, Header, Input, Segment, TextArea } from 'semantic-ui-react'

class Component extends React.Component {
    state = { title: 'Angular', body: 'It\'s not vue.js', author: 'Anonimous', category: 'udacity' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = e => {
        const { author, body, category, title } = this.state
        const { onHandleSubmit } = this.props

        e.preventDefault()
        const response = { author, body, category, title }
        onHandleSubmit(response)
        this.setState({ author: '', body: '', category: '', title: '' })

    }

    render() {
        const { author, body, category, title } = this.state

        const { categories, filter } = this.props
        const filteredCategories = filter !== ''
            ? categories.filter(category => category.path === filter)
            : categories
        const options = filteredCategories.reduce((acc, category, index) => {
            return [...acc, {
                key: category.path,
                value: category.path,
                name: category.path,
                text: category.name,
            }]
        }, [])

        return (
            <Segment>
                <Header as='h2' dividing>
                    <Header.Content>New Post</Header.Content>
                </Header>
                <Form onSubmit={this.handleSubmit} size='mini'>
                    <Form.Input
                        required
                        control={Input}
                        placeholder='Title'
                        name='title'
                        value={title}
                        onChange={this.handleChange} />

                    <Form.Input
                        required
                        control={TextArea}
                        placeholder='Description'
                        name='body'
                        value={body}
                        onChange={this.handleChange} />

                    <Form.Group widths='equal'>
                        <Form.Select
                            value={filter ? filter : category}
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

                    <Form.Button fluid size='mini' content='Submit' />
                </Form>
            </Segment>
        )
    }
}

export default Component
