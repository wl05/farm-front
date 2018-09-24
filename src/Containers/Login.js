import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginCom from '../Routes/Login/index';
// import { getTitle } from '../Modules/Home/actions';

class Login extends Component {
    render () {
        return <LoginCom {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {loginState : state.login}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);