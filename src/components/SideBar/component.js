import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Menu } from 'semantic-ui-react'



const SideBar = (props) => {

    const { options } = props

    const allCategories = [{ path: '', name: 'All categories' }]

    return (
        <Menu pointing secondary vertical>
            <Menu.Header>Filter by Categories</Menu.Header>
            <Menu.Menu>
                {
                    options.length
                        ? allCategories.concat(options).map(option =>
                            <Menu.Item
                                as={Link} to={`/${option.path}`}
                                key={option.path} name={option.name} />)

                        : <Menu.Item name='No categories were found' />
                }
            </Menu.Menu>
        </Menu>
    )
}

const mapStateToProps = state => { return state }

export default connect(mapStateToProps, null)(SideBar)