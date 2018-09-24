import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../Routes/UserList/index';
// import { getTitle } from '../Modules/Home/actions';

class User extends Component {
    render () {
        return <UserList {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {userListState : state.userList}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);