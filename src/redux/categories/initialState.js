import { fromJS } from 'immutable';

export const initialState = fromJS({
    fetching: false,
    error: false,
    categories: {
        items: [],
        images: [],
        limit: 10,
        page: 0,
        activeCategory: -1,
    }
})