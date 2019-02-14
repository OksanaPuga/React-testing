import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

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
            <form onSubmit={this.onSubmit}>
                <h4>Add a comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={this.onChange} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions)(CommentBox);