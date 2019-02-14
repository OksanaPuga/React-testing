import * as actions from 'actions';
import * as cons from 'actions/types';

describe('saveComment action', () => {
    it('has a correct type', () => {
        const action = actions.saveComment();
        expect(action.type).toEqual(cons.SAVE_COMMENT);
    });

    it('has a correct payload', () => {
        const comment = 'New comment';
        const action = actions.saveComment(comment);
        expect(action.payload).toEqual(comment);
    });
});