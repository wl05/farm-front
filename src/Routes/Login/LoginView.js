import React from 'react';
import { Form, Icon, Input, Button } from 'antd'
import { connect } from 'react-redux'
import "./Style.scss"
import { login } from "./action"
const FormItem = Form.Item
class Login extends React.Component {
    componentWillMount () {
        // const {receiveData} = this.props;
        // receiveData(null, 'auth');
    }
    
    componentWillReceiveProps (nextProps) {
        // const {auth: nextAuth = {}} = nextProps;
        // const {history} = this.props;
        // if (nextAuth.data && nextAuth.data.uid) {   // 判断是否登陆
        //     localStorage.setItem('token', JSON.stringify(nextAuth.data));
        //     history.push('/');
        // }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("进来了")
                this.props.login(
                    values.username,
                    values.password
                )
            }
        });
    };
    
    render () {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <span>React Admin</span>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth : '300px'}}>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules : [ {required : true, message : '请输入用户名!'} ],
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
                            <Button type="primary" htmlType="submit" className="login-form-button"
                                    style={{width : '100%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        
        );
    }
}

const mapStateToProps = (state) => {
    return {loginState : state.login}
}
const mapDispatchToProps = (dispatch) => {
    return {
        login : (username, password) => dispatch(login(username, password))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(Login));