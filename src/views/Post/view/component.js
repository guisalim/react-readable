import React from 'react'

import { Container, Grid } from 'semantic-ui-react'
import { Card, Details } from '../components'

const Component = props => {
    return (
        <Container fluid>
            <Grid stackable columns={2}>
                <Grid.Column width={4}>
                    <Card {...props} />
                </Grid.Column>
                <Grid.Column width={10}>
                    {/* Corrigir a parte de detalhes porque não está em um padrão adequado de UI */}
                    <Details {...props} />
                </Grid.Column>
                <Grid.Column width={2} />
            </Grid>
        </Container>
    )
}

export default Component
