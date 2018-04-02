import React from 'react'

import Component from './component'

class Container extends React.Component {
    componentDidMount() {
        const { getComments, post } = this.props
        getComments(post.id)
    }

    render() {
        return <Component {...this.props} />
    }
}

export default Container
