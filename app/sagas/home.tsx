import {select, put, call} from 'redux-saga/effects';
import { addOne, changeStatus } from '../actions/home.actions';

export function* changeAndAdd() {
    let allStates = yield select(state => state)
    console.log('allStates-->', allStates);
    yield put(addOne());
    yield put(changeStatus('I\'m a payload'));
}