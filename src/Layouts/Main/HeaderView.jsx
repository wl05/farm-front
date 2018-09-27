import React, { Component } from 'react'
import { Menu, Icon, Layout } from 'antd'
import avater from '../../Assets/avator.jpg'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
const {Header} = Layout
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
class HeaderCustom extends Component {
    logout () {
        localStorage.removeItem('token')
        window.location = '/login'
    }
    
    render () {
        const {userInfo} = this.props.mainState
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
                    onClick={(e)=> {
                        if (e.key === "logout") {
                            this.logout()
                        }
                        console.log(e)
                    }}
                >
                    <SubMenu title={<span className="avatar"><img src={avater} alt="头像"/><i
                        className="on bottom b-white"/></span>}>
                        <MenuItemGroup title="用户中心">
                            <Menu.Item key="name">你好 - {userInfo.username}</Menu.Item>
                            <Menu.Item key="resetPassword">重置密码</Menu.Item>
                            <Menu.Item key="logout"><span>退出登录</span></Menu.Item>
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

const mapStateToProps = (state) => {
    return {mainState : state.main}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HeaderCustom))

