import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

const Component = () => {
    return (
        <Menu pointing secondary>
            <Container>
                <Menu.Item header>Readable</Menu.Item>
                <Menu.Item name='messages' />
                <Menu.Item name='friends' />
            </Container>
        </Menu>
    )
}

export default Component