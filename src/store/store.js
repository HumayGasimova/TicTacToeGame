import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import {
    createBrowserHistory
} from 'history';

import {
    routerMiddleware
} from 'connected-react-router';

import {
    createLogger
} from 'redux-logger';

import thunk from 'redux-thunk';
import createRootReducer from '../reducers/reducers';

const logger = createLogger({
    collapsed: true
});
const middleware = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.ENVIRONMENT !== 'production') {
    middleware.push(logger);
}

export const history = createBrowserHistory();

export default createStore(
    createRootReducer(history), 
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            logger,
            thunk
            )
        )
    );
