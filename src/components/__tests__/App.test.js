import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentsList from 'components/CommentsList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

it('shows comment box component', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows comments list component', () => {
    expect(wrapped.find(CommentsList).length).toEqual(1);
});