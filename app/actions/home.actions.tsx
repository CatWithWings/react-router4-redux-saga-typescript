// export const ADD_ONE = 'ADD_ONE';
// export const CHANGE_STATUS = 'CHANGE_STATUS';
// export const CHANGE_AND_ADD = 'CHANGE_AND_ADD';
import * as constants from './home.constants'

export interface addOne {
    type: constants.ADD_ONE;
}

export interface changeStatus {
    type: constants.CHANGE_STATUS;
    payload: any;
}

export interface changeAndAdd {
    type: constants.CHANGE_AND_ADD;
}

export type HomeActionsAll= addOne | changeStatus | changeAndAdd;

export const addOne = ():addOne=>{
    return {
        type : constants.ADD_ONE,
    }
}


export const changeStatus = (payload:any):changeStatus=>{
    return {
        type : constants.CHANGE_STATUS,
        payload
    }
}


export const changeAndAdd = ():changeAndAdd=>{ // 这是个特殊的action
    return {
        type : constants.CHANGE_AND_ADD,
    }
}