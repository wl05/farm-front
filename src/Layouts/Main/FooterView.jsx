import React from 'react';
import { Layout } from 'antd';
const {Footer} = Layout;

class FooterView extends React.Component {
    render () {
        return (
            <Footer style={{textAlign : 'center'}}>
                React-Admin ©{new Date().getFullYear()} Created by 2929712050@qq.com
            </Footer>
        );
    }
}
export default FooterView;