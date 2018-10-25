import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'router/router';
import { Provider } from 'react-redux';
import store from 'myRedux/store.js';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>, 
    document.querySelector('#root')
);