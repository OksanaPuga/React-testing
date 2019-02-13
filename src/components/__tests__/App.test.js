import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentsList from '../CommentsList';


const wrapped = shallow(<App />);

it('shows comment box component', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows comments list component', () => {
    expect(wrapped.find(CommentsList).length).toEqual(1);
});