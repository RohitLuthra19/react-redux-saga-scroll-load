import * as types from './types';
//import { fromJS } from 'immutable';
import { initialState } from './initialState';

const reducer = (state = initialState, action) => {
    switch(action.type) {

        //Get all categories
        case types.GET_CATEGORIES_REQUEST:
            return state.setIn(['categories', 'fetching'], true)
              .setIn(['categories', 'error'], false);

        case types.GET_CATEGORIES_SUCCESS:
            const { data } = action.data;

            return state.setIn(['categories', 'fetching'], false)
              .setIn(['categories', 'error'], false)
              .setIn(['categories', 'items'], data);

        case types.GET_CATEGORIES_FAILURE:
            return state.setIn(['categories', 'fetching'], false)
              .setIn(['categories', 'error'], true);

        //Get Specific category
        case types.GET_SINGLE_CATEGORY_REQUEST:
            return state.setIn(['categories', 'fetching'], true)
              .setIn(['categories', 'error'], false);

        case types.GET_SINGLE_CATEGORY_SUCCESS:
            const { data: res } = action.data;
            
            return state.setIn(['categories', 'fetching'], false)
              .setIn(['categories', 'error'], false)
              .setIn(['categories', 'images'], res);

        case types.GET_SINGLE_CATEGORY_FAILURE:
            return state.setIn(['categories', 'fetching'], false)
              .setIn(['categories', 'error'], true);

        default: 
            return state;
    }
}

export default reducer;

export const getCategories = () => ({ type: types.GET_CATEGORIES_REQUEST })
export const getSingleCategory = (categoryId, limit, page) => ({ type: types.GET_SINGLE_CATEGORY_REQUEST, categoryId, limit, page })

