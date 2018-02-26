import React from 'react'
import { Link } from 'react-router-dom'

import { Container, Menu } from 'semantic-ui-react'

const Component = () => {
    return (
        <Menu pointing secondary>
            <Container>
                <Menu.Item as={Link} to='/' header>Readable</Menu.Item>
                <Menu.Item as={Link} to='/CreateEdit' name='New Post' />
                <Menu.Item name='friends' />
            </Container>
        </Menu>
    )
}

export default Component