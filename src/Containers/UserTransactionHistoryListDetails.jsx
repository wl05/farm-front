import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserTransactionHistoryListDetails from '../Routes/UserList/UserTransactionHistoryListDetails';
// import { getTitle } from '../Modules/Home/actions';

class UserTransactionHistoryListDetailsCom extends Component {
    render () {
        return <UserTransactionHistoryListDetails {...this.props} />;
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
)(UserTransactionHistoryListDetailsCom);