import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class HomeCom extends Component {
    constructor (props) {
        super(props);
    }
    
    componentWillMount () {
    }
    
    render () {
        // const {homeState} = this.props;
        return (
            <div id="home-container">
                <a onClick={()=> {
                    {/*this.props.getTitle('hello')*/
                    }
                }}>
                    点击我改变
                </a>
            </div>
        );
    }
}
