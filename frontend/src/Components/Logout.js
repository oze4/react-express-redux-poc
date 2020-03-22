import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withRedux } from '../Redux';

class Logout extends Component {
    handleLogout = () => {
        this.props.setAccountStatus(false);
        // Redirect to homepage after logging out
        this.props.history.push('/');
    }

    render() { return <button onClick={this.handleLogout}>Logout</button> }
}

export default withRouter(withRedux(Logout));
