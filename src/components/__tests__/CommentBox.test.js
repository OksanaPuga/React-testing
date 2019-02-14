import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;
const text = 'new comment';

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a textarea and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('text area behaviour', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { target: { value: text } });
        wrapped.update();
    });    

    it('allows user to type some value in the textarea', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(text);
    });
    
    it('empties textarea after submitting the comment', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});