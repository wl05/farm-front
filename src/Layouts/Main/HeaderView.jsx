import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge } from 'antd';
import avater from '../../Assets/avator.jpg';
import { withRouter } from 'react-router-dom';
const {Header} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeaderCustom extends Component {
    state = {
        user : '',
        visible : false,
    };
    
    menuClick (e) {
        console.log(e);
        e.key === 'logout' && this.logout();
    };
    
    logout () {
        this.props.history.push('/login')
    };
    
    render () {
        return (
            <Header style={{background : '#fff', padding : 0, height : 65}} className="custom-theme">
                <Icon
                    className="trigger custom-trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu
                    mode="horizontal"
                    style={{lineHeight : '64px', float : 'right'}}
                    onClick={this.menuClick}
                >
                    <SubMenu title={<span className="avatar"><img src={avater} alt="头像"/><i
                        className="on bottom b-white"/></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="setting:1">你好 - admin</Menu.Item>
                            <Menu.Item key="setting:2">个人信息</Menu.Item>
                            <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="setting:3">个人设置</Menu.Item>
                            <Menu.Item key="setting:4">系统设置</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                    }
                `}</style>
            </Header>
        )
    }
}
export default withRouter(HeaderCustom);
