import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './helpers/store'

import App from './components/app/component';
import 'semantic-ui-css/semantic.min.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
