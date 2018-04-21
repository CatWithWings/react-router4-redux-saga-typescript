import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import homeReducer from './home.reducer';

const rootReducer = combineReducers({
    homeReducer,
    routing: routerReducer
})

export default rootReducer