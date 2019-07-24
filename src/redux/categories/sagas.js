import { takeLatest, put, call, select } from 'redux-saga/effects';
import axios from 'axios';
import * as types from './types';

export function* categoriesWatcherSaga() {
    yield takeLatest(types.GET_CATEGORIES_REQUEST, workerSaga);
}

export function fetchData(baseUrl, limit, offset) {
    const url =`${baseUrl}/categories`;
    const params = { limit, offset };

    return axios.get(url, {params})
        .then(val => val)
        .catch(err => console.log('get categories error', err))
}

export function* workerSaga({ limit, offset }) {
    try {
        //const state = yield select();
        const baseUrl = 'https://api.thecatapi.com/v1/';
        const data = yield call(fetchData, baseUrl, limit, offset);
        if (data) {
            yield put({ type: types.GET_CATEGORIES_SUCCESS, data });
        } else {
            yield put({ type: types.GET_CATEGORIES_FAILURE, error: true });
        }

        //yield put({ type: types.GET_CATEGORIES_REQUEST });
    } catch (error) {
        yield put({ type: types.GET_CATEGORIES_FAILURE, error });
    }
}