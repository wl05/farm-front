import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './Store';
// co
import Routes from "./Routes"

ReactDOM.render((
    <Provider store={store}>
        <Router>
            {Routes}
        </Router>
    </Provider>
), document.getElementById('root'));
