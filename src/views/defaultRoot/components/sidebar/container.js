import React from 'react'
import Component from './component'

export default class Container extends React.Component {
    componentDidMount() {
        this.props.getCategories()
    }
    
    render () {
        return <Component {...this.props} />
    }
}