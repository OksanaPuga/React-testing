import commentsReducer from 'reducers/commentsReducer';
import * as cons from 'actions/types';

it(`properly processes actions with type ${cons.SAVE_COMMENT}`, () => {
    const comment = 'New comment';
    const action = {
        type: cons.SAVE_COMMENT,
        payload: comment
    };
    const newState = commentsReducer([], action);

    expect(newState).toEqual([comment]);
});

it('handles actions with unnown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
})