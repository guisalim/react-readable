import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Container } from 'semantic-ui-react'
import { Header } from '../../components'

import { Root, CreateEdit } from '../../views'

export default class App extends Component {

  render() {
    return (
      <Container fluid>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/' component={Root} />
            <Route exact path='/CreateEdit' component={CreateEdit} />
            <Route exact path='/CreateEdit/:edited' component={CreateEdit} />
            <Route exact path='/:filter/' component={Root} />
            <Route path='*' render={() => <h1>Not Found</h1>} />
          </Switch>
        </Container>
      </Container>
    );
  }
}