import React from 'react';
import HeaderView from './HeaderView'
import FooterView from './FooterView'
import SiderView from './Sider'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './Main.scss'
const {Content} = Layout;
class MainLayoutView extends React.Component {
    state = {
        collapsed : false,
    };
    toggle = () => {
        this.setState({
            collapsed : !this.state.collapsed,
        });
    };
    
    render () {
        return (
            <Layout>
                <SiderView collapsed={this.state.collapsed}/>
                <Layout>
                    <HeaderView toggle={this.toggle} collapsed={this.state.collapsed}/>
                    <Content style={{margin : '16px 16px', overflow : 'initial', flex : '1 1 0'}}>
                        {this.props.children}
                    </Content>
                    <FooterView />
                </Layout>
            </Layout>
        );
    }
}
export default MainLayoutView;