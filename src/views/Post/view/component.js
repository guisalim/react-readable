import React from 'react'

import { Container, Grid } from 'semantic-ui-react'
import { Card } from '../components'

const Component = props => {
    return (
        <Container fluid>
            <Grid stackable columns={2}>
                <Grid.Column width={4}>
                    <Card id={props.post}/>
                </Grid.Column>
                <Grid.Column width={10}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        </Container>
    )
}

export default Component
