import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';
import { Provider } from 'react-redux';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async, stateValidator)
    );
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}