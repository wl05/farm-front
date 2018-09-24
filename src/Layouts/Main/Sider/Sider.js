import React, { Component } from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import routes from '../../../Routes/router';
import SiderMenu from './SiderMenu';

const {Sider} = Layout;

class SiderCustom extends Component {
    static setMenuOpen = props => {
        const {pathname} = props.location;
        return {
            openKey : pathname.substr(0, pathname.lastIndexOf('/')),
            selectedKey : pathname
        };
    };
    state = {
        collapsed : false,
        mode : 'inline',
        openKey : '',
        selectedKey : '',
        firstHide : true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    
    componentDidMount () {
        const state = SiderCustom.setMenuOpen(this.props);
        this.setState(state);
    }
    
    menuClick = e => {
        this.setState({
            selectedKey : e.key
        });
    };
    openMenu = v => {
        this.setState({
            openKey : v[ v.length - 1 ],
            firstHide : false,
        })
    };
    
    render () {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{overflowY : 'auto'}}
            >
                <div className="logo"/>
                <SiderMenu
                    menus={routes.routes}
                    onClick={this.menuClick}
                    theme="dark"
                    mode="inline"
                    selectedKeys={[ this.state.selectedKey ]}
                    openKeys={this.state.firstHide ? null : [ this.state.openKey ]}
                    onOpenChange={this.openMenu}
                />
                <style>
                    {`
                    #nprogress .spinner{
                        left: ${this.state.collapsed ? '70px' : '206px'};
                        right: 0 !important;
                    }
                    `}
                </style>
            </Sider>
        )
    }
}

export default withRouter(SiderCustom);