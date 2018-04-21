import { combineReducers } from 'redux';

import * as constants from '../actions/home.constants'
import { HomeActionsAll } from '../actions/home.actions';

function add(state=0, action:HomeActionsAll) {
    switch(action.type){
        case constants.ADD_ONE:
            let count = state + 1;
            return count;

        default:
            return state;
    }
}

function changeStatus(state='not change yet', action:HomeActionsAll){
    switch(action.type){
        case constants.CHANGE_STATUS:
            let status = 'changed success';
            console.log('payload-->', action.payload)
            return status;

        default:
            return state;
    }
}

const homeReducer = combineReducers({
    add,
    changeStatus,
})

export default homeReducer;