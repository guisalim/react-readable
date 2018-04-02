import React from 'react'
import Component from './component'

export default class Container extends React.Component {
    render() {
        const handleSubmit = response => {
            this.props.createPost(response)
        }

        return <Component {...this.props} onHandleSubmit={handleSubmit} />
    }
}
