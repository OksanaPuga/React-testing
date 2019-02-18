import * as cons from 'actions/types';

export default (state = false, action) => {
    switch(action.type) {
        case cons.CHANGE_AUTH:
            return action.payload;
        default:
            return state;
    }
}