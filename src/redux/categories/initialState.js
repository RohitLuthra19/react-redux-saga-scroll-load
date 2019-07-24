import { fromJS } from 'immutable';

export const initialState = fromJS({
    fetching: false,
    error: false,
    categories: {
        items: {},
        total: 0,
        pages: {},
        limit: 10,
        offset: 0,
        activePage: 1,
    }
})