import React from 'react'
import { Menu } from 'semantic-ui-react'

const SideBar = (props) => {
    const { options } = props
    console.log(options)
    return (
        <Menu pointing secondary vertical>
            <Menu.Header>Filter by Categories</Menu.Header>
            <Menu.Menu>
                {options.map(option => <Menu.Item key={option[0].path} name={option[0].name} />)}
            </Menu.Menu>
        </Menu>
    )
}

export default SideBar