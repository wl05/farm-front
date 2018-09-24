import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransactionHistory from "../Routes/TransactionHistory"
import { getTitle } from '../Modules/TransactionHistroy/action';

class TransactionHistoryCom extends Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return <TransactionHistory {...this.props} />;
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
)(TransactionHistoryCom);