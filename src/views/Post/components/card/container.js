import React from 'react'
import Component from './component'

import { Loader } from 'semantic-ui-react'

class Container extends React.Component {
    componentDidMount() {
        const { getComments, getPost, id } = this.props
        getComments(id)
        getPost(id)
    }

    render() {
        return (
            this.props.post ? <Component {...this.props} /> : <Loader active />
        )
    }
}

export default Container
