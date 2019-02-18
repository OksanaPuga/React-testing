import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';
import requireAuth from 'components/requireAuth'; 

class CommentBox extends React.Component {
    state = { comment: '' }

    onChange = e => {
        this.setState({ comment: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h4>Add a comment</h4>
                    <textarea
                        value={this.state.comment}
                        onChange={this.onChange} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className='fetch-btn' onClick={this.props.fetchComments}>
                    Fetch Comments
                </button>
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CommentBox));