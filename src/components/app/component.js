import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Container, Grid } from 'semantic-ui-react'
import { Header } from '../../components/'

import { CreateEdit, DefaultRoot, Post } from '../../views'

const App = props => {
  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Container>
          <Grid stackable>
            <Grid.Column>
              <Switch>
                {/* Inserir correções em caso de página sem filtro ou em case default */}
                <Route exact path='/' component={DefaultRoot} />
                <Route exact path='/CreateEdit/' component={CreateEdit} />
                <Route exact path='/CreateEdit/:post' component={CreateEdit} />
                <Route exact path='/Post/:post' component={Post} />
                <Route exact path='/:filter/' component={DefaultRoot} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Container>
      </Container>
    </BrowserRouter>
  )
}

export default App
