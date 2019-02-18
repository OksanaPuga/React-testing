import React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends React.Component {
        componentDidMount() {
            this.checkPermission();
        }
    
        componentDidUpdate() {
            this.checkPermission();
        }
    
        checkPermission() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

        render() {
            return (<ChildComponent {...this.props} />);
        }
    }

    const mapStateToProps = state => ({
        auth: state.auth
    });    

    return connect(mapStateToProps)(ComposedComponent);
}