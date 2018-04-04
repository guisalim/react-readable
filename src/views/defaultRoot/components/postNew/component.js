import React from 'react'

import { Form, Input, Segment, TextArea } from 'semantic-ui-react'

class Component extends React.Component {
    state = { title: '', body: '', author: '', category: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = e => {
        e.preventDefault()

        const { author, body, category, title } = this.state
        const { onHandleSubmit } = this.props

        const response = {
            author: author === '' ? 'Anonimous' : author,
            body, category, title
        }
        
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
            <Segment color='blue'>
                <Form onSubmit={this.handleSubmit} size='mini'>
                    <Form.Input
                        required
                        control={Input}
                        placeholder='What are you thinking about?'
                        name='title'
                        value={title}
                        onChange={this.handleChange} />

                    <Form.Input
                        required
                        control={TextArea}
                        placeholder='Tell me more about it...'
                        name='body'
                        value={body}
                        onChange={this.handleChange} />

                    <Form.Group widths='equal'>
                        <Form.Select
                            value={filter ? filter : category}
                            name='category'
                            placeholder='What subject are you talking about?'
                            options={options}
                            onChange={this.handleChange} />

                        <Form.Input
                            control={Input}
                            placeholder='Who are you?'
                            name='author'
                            value={author}
                            onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Button fluid size='mini' content='Post!' />
                </Form>
            </Segment>
        )
    }
}

export default Component
