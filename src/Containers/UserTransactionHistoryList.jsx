import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserTransactionHistoryList from '../Routes/UserList/UserTransactionHistoryList';
// import { getTitle } from '../Modules/Home/actions';

class UserTransactionHistoryListCom extends Component {
    render () {
        return <UserTransactionHistoryList {...this.props} />;
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
)(UserTransactionHistoryListCom);