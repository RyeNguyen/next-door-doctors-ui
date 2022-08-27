import React, { Component } from 'react';
import { connect } from 'react-redux';

class Homepage extends Component {
    render() {
        return (
            <div>welcome home sir</div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
