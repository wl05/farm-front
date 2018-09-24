import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionDetails from "../Routes/TransactionHistory/TransactionDetails"
import { getTitle } from '../Modules/TransactionHistroy/action';

class TransactionDetailsCom extends Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return <TransactionDetails {...this.props} />;
    }
}
const mapStateToProps = (state) => {
    return {transactionHistoryState : state.transactionHistory}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionDetailsCom);