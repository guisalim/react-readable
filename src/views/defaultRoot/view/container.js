import React from 'react'
import Component from './component'

export default class Container extends React.Component {
        render() {
            return <Component {...this.props} />
        }
    }