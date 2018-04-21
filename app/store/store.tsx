import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createHashHistory';
import { routerMiddleware } from 'react-router-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer/rootReducer';

import rootSaga from '../sagas/index';

const history = createHistory(),
     middleware = routerMiddleware(history),
     sagaMiddleware = createSagaMiddleware(),
     composeEnhancers = composeWithDevTools({});

// add dev tools
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(middleware)
    )
);

// run root saga
sagaMiddleware.run(rootSaga);

export default store;