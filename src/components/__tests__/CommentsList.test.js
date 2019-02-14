import React from 'react';
import { mount } from 'enzyme';

import Root from 'root';
import CommentsList from 'components/CommentsList';

let wrapped;
const initialState = { comments: ['123', 'abc'] };

beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentsList />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('renders one "li" tag per each comment', () => {
    expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});

it('each comment\'s text is visible', () => {
    expect(wrapped.render().text()).toContain(initialState.comments[0]);
    expect(wrapped.render().text()).toContain(initialState.comments[1]);
});