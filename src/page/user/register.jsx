/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-14 16:29:20
 * @version $Id$
 */
import React, { Component } from 'react';
import { Form, Icon, Button, Input,Modal } from 'antd';
import { Link,withRouter } from 'react-router-dom';


import "./style/user.scss";
import "./style/register.scss";


const FormItem = Form.Item;

class userRegister extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	handleSubmit = (e)=>{

		e.preventDefault();
		this.props.form.validateFields((err,data)=>{
			if(!err) {
				//this.props.register(res);
				
					
				
			}
		})
	}


	render() {

		const { getFieldDecorator } = this.props.form;

		return(
			<div>
				<div className="userRegister">
					<h2>用户注册</h2>
					<Form  className="login-form">

						<FormItem>
							{
								getFieldDecorator('user',{
									initialValue: '',
									rules: [
										{
											required: true,
											message: '用户名不能为空'
										},
										{
											min:5,max:12,
											message: '长度为5到12位',
										},
										{
											pattern:new RegExp('^\\w+$','g'),
                                       	 	message:'用户名必须为字母或者数字'
										}
									]
								})(
								<Input prefix={<Icon type={'user'}/>} placeholder="请输入用户名"/>
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('password',{
									initialValue: '',
									rules: [
										{
											required: true,
											message: '密码不能为空',
										},
										{
											min:6,max:12,
											message: '长度为6到12位',
										}
									]
								})(
									<Input type="password" prefix={<Icon type={'lock'}/>} 
										placeholder="请输入密码"/>
								)
							}
						</FormItem>
						<FormItem>
							{
								getFieldDecorator('repeatPwd',{
									initialValue: '',
									rules: [
										{
											required: true,
											message: '密码不能为空',
										},
										{
											min:6,max:12,
											message: '长度为6到12位',
										}
									]
								})(
									<Input type="password" prefix={<Icon type={'lock'}/>} 
										placeholder="请再次输入密码"/>
								)
							}
						</FormItem>
						<FormItem>
							
							<Button type="primary" onClick={this.handleSubmit} className="login-form-button">
		            			注册
		          			</Button>
							
						</FormItem>
					</Form>
				</div>
			</div>
		)
	}
}

const formReg = Form.create()(userRegister)

export default withRouter(formReg)