import React from 'react';
import { Form, Icon, Input, Button, message, Spin } from 'antd'
import { connect } from 'react-redux'
import "./Style.scss"
import { login } from "./action"
import { auth } from "../../Layouts/Main/action"
import { Redirect } from 'react-router'
const FormItem = Form.Item
class Login extends React.Component {
    componentWillMount () {
        
        this.props.auth()
    }
    
    componentWillReceiveProps (nextProps) {
        const {loginData, loginError} = nextProps.loginState
        const {userInfo} = nextProps.mainState
        if (userInfo && userInfo.code !== "auth_001") {
            return this.props.history.push('/')
        }
        if (loginError) {
            return message.error('登录失败')
        }
        if (loginData && (loginData.code === "user_003" || loginData.code === "user_001")) {
            return message.error('用户不存在')
        }
        if (loginData && loginData.code === 0) {
            localStorage.setItem('token', loginData.data.token)
            this.props.history.push('/')
            return
        }
        
        
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.login(
                    values.phone,
                    values.password
                )
            }
        });
    };
    
    render () {
        const {getFieldDecorator} = this.props.form
        const {loginLoading} = this.props.loginState
        const {
            authLoading,
            authError,
        } = this.props.mainState
        if (authError) {
            return <div>出错了</div>
        }
        if (authLoading) {
            return <div className="auth-loading">
                <Spin size="large"/>
            </div>
        }
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth : '300px'}}>
                        <FormItem>
                            {getFieldDecorator('phone', {
                                rules : [ {required : true, message : '请输入电话号码!'} ],
                            })(
                                <Input prefix={<Icon type="user" style={{fontSize : 13}}/>}
                                       placeholder="管理员输入admin, 游客输入guest"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules : [ {required : true, message : '请输入密码!'} ],
                            })(
                                <Input prefix={<Icon type="lock" style={{fontSize : 13}}/>} type="password"
                                       placeholder="管理员输入admin, 游客输入guest"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button
                                loading={loginLoading}
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                style={{width : '100%'}}
                            >
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loginState : state.login,
        mainState : state.main
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login : (username, password) => dispatch(login(username, password)),
        auth : ()=>dispatch(auth())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Login));