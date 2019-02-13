import React from 'react';

class CommentBox extends React.Component {
    state = { comment: '' }

    onChange = e => {
        this.setState({ comment: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({ comment: '' });
    }

    render() {
        return (
            <form>
                <h4>Add a comment</h4>
                <textarea
                    value={this.state.comment}
                    onChange={this.onChange} />
                <div>
                    <button onClick={this.onSubmit}>
                        Submit Comment
                    </button>
                </div>
            </form>
        );
    }
}

export default CommentBox;