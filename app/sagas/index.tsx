import {takeEvery} from 'redux-saga/effects';

import { CHANGE_AND_ADD } from '../actions/home.constants';
import { changeAndAdd } from './home';

function* watchChangeAndAdd() {
    yield takeEvery(CHANGE_AND_ADD, changeAndAdd)
}


/*
 * 这里主要为原来thunk的功能， 如一个特殊的action， 触发其他的action
 */
export default function* rootSaga() {
    yield [
        watchChangeAndAdd(),
    ]
}