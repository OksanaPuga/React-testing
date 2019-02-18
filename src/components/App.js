import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommetsList from 'components/CommentsList';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path='/' exact component={CommetsList} />
                <Route path='/post' component={CommentBox} />
            </div>
        );
    }

    renderHeader() {
        return (
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/post'>Post a Comment</Link></li>
                <li>{this.renderAuthBtn()}</li>
            </ul>
        );
    }

    renderAuthBtn() {
        const text = this.props.auth ? 'Sign Outh' : 'Sign In';

        return (
            <button onClick={() => {
                this.props.changeAuth(!this.props.auth);
            }}>
                {text}
            </button>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, actions)(App);