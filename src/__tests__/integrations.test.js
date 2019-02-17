import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'sdfsdfdsdf' }, { name: 'sdfsdfsdf' }]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fatch a list of comments and display them', (done) => {
    const wrapped = mount(<Root><App /></Root>);

    wrapped.find('.fetch-btn').simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        wrapped.unmount();
        done();
    });
});