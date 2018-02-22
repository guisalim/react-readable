import React from 'react'
import { Menu } from 'semantic-ui-react'

const SideBar = (props) => {
    const { options } = props
    return (
        <Menu pointing secondary vertical>
            <Menu.Header>Filter by Categories</Menu.Header>
            <Menu.Menu>
                {options.map(option => <Menu.Item key={option.path} name={option.name} />)}
            </Menu.Menu>
        </Menu>
    )
}

export default SideBar