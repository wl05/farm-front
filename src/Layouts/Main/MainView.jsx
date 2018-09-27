import React from 'react'
import HeaderView from './HeaderView'
import FooterView from './FooterView'
import SiderView from './Sider'
import { Layout, Spin, Card } from 'antd'
import 'antd/dist/antd.css'
import './Main.scss'
import { connect } from 'react-redux'
import { auth, clearUserInfo } from "./action"
const {Content} = Layout
class MainLayoutView extends React.Component {
    state = {
        collapsed : false,
    }
    
    componentWillMount () {
        this.props.auth()
    }
    
    componentWillReceiveProps (nextProps) {
        const {userInfo, authLoading, authError} = nextProps.mainState
        if (userInfo && userInfo.code === 'auth_001' && !authLoading && !authError) {
            localStorage.removeItem('token')
            this.props.clearUserInfo()
            window.location = '/login'
        }
    }
    
    toggle () {
        this.setState({collapsed : !this.state.collapsed})
    }
    
    render () {
        let {authLoading, authError} = this.props.mainState
        if (authError) {
            return <div>出错了</div>
        }
        console.log(this.props.title)
        return (
            <Layout>
                <SiderView collapsed={this.state.collapsed}/>
                {
                    authLoading ?
                        <Layout>
                            <div className="auth-loading">
                                <Spin size="large"/>
                            </div>
                        </Layout>
                        :
                        <Layout>
                            <HeaderView toggle={()=>this.toggle()} collapsed={this.state.collapsed}/>
                            <Content>
                                {this.props.children}
                            </Content>
                            
                            <FooterView />
                        </Layout>
                }
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {mainState : state.main}
}
const mapDispatchToProps = (dispatch) => {
    return {
        auth : () => dispatch(auth()),
        clearUserInfo : ()=>clearUserInfo(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainLayoutView);
