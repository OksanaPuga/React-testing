import React from 'react';
import { connect } from 'react-redux';

class CommentsList extends React.Component {
    render() {
        return (
            <ul>{this.renderList()}</ul>
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