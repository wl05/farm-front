import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../Layouts/Main';
import { getTitle } from '../Modules/Home/actions';

class Home extends Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return <Main {...this.props} />;
    }
}
export default connect(
    state => ({mainState : state.main}),
    dispatch => ({
        getTitle : bindActionCreators(getTitle, dispatch),
    })
)(Home);