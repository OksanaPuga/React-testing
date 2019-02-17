import React from 'react';
import { connect } from 'react-redux';

class CommentsList extends React.Component {
    render() {
        return (
            <div>
                <h4>Comments List</h4>
                <ul>{this.renderList()}</ul>
            </div>
        );
    }

    renderList() {
        return this.props.comments.map(comment => (
            <li key={comment}>{comment}</li>
        ));
    }
}

const mapStateToProps = (state) => ({
    comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);