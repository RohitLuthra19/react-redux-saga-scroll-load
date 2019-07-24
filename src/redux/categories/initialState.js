import { fromJS } from 'immutable';

export const initialState = fromJS({
    fetching: false,
    error: false,
    categories: {
        items: [],
        images: [],
        total: 0,
        limit: 10,
        page: 0,
    }
})