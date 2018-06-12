import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/index';
import thunk from 'redux-thunk'; 

const middleware = applyMiddleware(thunk);

const store = createStore(
    rootReducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

render(
    <Provider store = { store }>
        <App /> 
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
