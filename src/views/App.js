import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import { Header } from '../components'

import { Root } from '../views'

export default class App extends Component {

  render() {
    return (
      <Container fluid>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/' component={Root} />
          </Switch>
        </Container>
      </Container>
    );
  }
}
