import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './views/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    // </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
