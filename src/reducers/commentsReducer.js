import * as cons from 'actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case cons.SAVE_COMMENT:
            return [...state, action.payload];
        case cons.FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state, ...comments];
        default:
            return state;
    }
}