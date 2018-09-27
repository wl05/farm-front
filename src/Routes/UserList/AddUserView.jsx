import { Form, Input, Select, Button } from 'antd'
import React from 'react'
const FormItem = Form.Item
const Option = Select.Option
class AddUserView extends React.Component {
    state = {
        confirmDirty : false,
        autoCompleteResult : [],
    };
    
    render () {
        const {getFieldDecorator} = this.props.form;
        
        const formItemLayout = {
            labelCol : {
                xs : {span : 24},
                sm : {span : 4},
            },
            wrapperCol : {
                xs : {span : 24},
                sm : {span : 20},
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol : {
                xs : {span : 24, offset : 0},
                sm : {span : 20, offset : 4},
            },
        };
        
        
        return (
            <div className="add-user-view-container">
                <div className="form-container">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="姓名"
                        >
                            {getFieldDecorator('name', {
                                rules : [ {
                                    required : true, message : '请输入姓名',
                                } ],
                            })(
                                <Input />
                            )}
                        </FormItem>
                        
                        <FormItem
                            {...formItemLayout}
                            label="账户名"
                        >
                            {getFieldDecorator('username')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="手机"
                        >
                            {getFieldDecorator('phone', {
                                rules : [ {required : true, message : '请输入电话号码'} ],
                            })(
                                <Input style={{width : '100%'}}/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="设置密码"
                        >
                            {getFieldDecorator('password', {
                                rules : [ {
                                    required : true, message : '请为用户设置密码',
                                }, {
                                    validator : this.validateToNextPassword,
                                } ],
                            })(
                                <Input type="password"/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="确认密码"
                        >
                            {getFieldDecorator('confirmPassword', {
                                rules : [ {
                                    required : true, message : '请输入确认密码',
                                }, {
                                    validator : this.compareToFirstPassword,
                                } ],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur}/>
                            )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="分配角色"
                        >
                            {getFieldDecorator('gender', {
                                initialValue : "0",
                            })(
                                <Select
                                    placeholder="Select a option and change input text above"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="0">普通用户</Option>
                                    <Option value="1">管理员</Option>
                                    <Option value="2">超级管理员</Option>
                                </Select>
                            )}
                        </FormItem>
                        
                        <FormItem
                            {...formItemLayout}
                            label="备注信息"
                        >
                            {getFieldDecorator('info')(
                                <Input />
                            )}
                        </FormItem>
                        
                        <FormItem {...formItemLayoutWithOutLabel}>
                            <Button type="primary" htmlType="submit">添加</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({confirmDirty : this.state.confirmDirty || !!value});
    }
    
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form
        if (value && this.state.confirmDirty) {
            form.validateFields([ 'confirm' ], {force : true})
        }
        callback()
    }
}

const WrappedRegistrationForm = Form.create()(AddUserView)

export default WrappedRegistrationForm