// Redux's Store definitions

import { createStore, applyMiddleware, compose } from 'redux'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//const logger = createLogger();

export default createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk/*, logger*/)
    )
)