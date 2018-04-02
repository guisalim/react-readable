import React from 'react'

import Component from './component'

class Container extends React.Component {
    render() {
        return <Component {...this.props} />
    }
}

export default Container
