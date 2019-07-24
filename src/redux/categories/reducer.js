import * as types from './types';
//import { fromJS } from 'immutable';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_CATEGORIES_REQUEST:
            return state.setIn(['categories', 'fetching'], true)
                .setIn(['categories', 'error'], false);

        case types.GET_CATEGORIES_SUCCESS:
            return state.setIn(['categories', 'fetching'], false)
            .setIn(['categories', 'error'], false);

        case types.GET_CATEGORIES_FAILURE:
            return state.setIn(['categories', 'fetching'], false)
            .setIn(['categories', 'error'], true);

        default: 
            return state;
    }
}

export default reducer;

export const getCategories = (limit, offset) => ({ type: types.GET_CATEGORIES_REQUEST, limit, offset })