import React from 'react';
import { Route } from 'react-router-dom';

import CommentBox from 'components/CommentBox';
import CommetsList from 'components/CommentsList';

export default () => (
    <div>
        <Route path='/' exact component={CommetsList} />
        <Route path='/post' component={CommentBox} />
    </div>
);
