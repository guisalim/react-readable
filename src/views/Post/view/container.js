import React from 'react'

import Component from './component'

class Container extends React.Component {
    componentDidMount() {
        const { getComments, getPost, filter } = this.props
        getPost(filter)
        getComments(filter)
    }

    render() {
        return <Component {...this.props} />
    }
}

export default Container
