/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-14 10:17:46
 * @version $Id$
 */
import React, { Component } from 'react';
import { Form, Icon, Button,Modal,Input, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom';


import 'animate.css';
import './style/user.scss';
import './style/login.scss';


const FormItem = Form.Item;

class userLogin extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}
	
	
	
	componentWillMount = ()=>{
		this.clearData();
	}

	clearData = ()=>{
		this.props.form.resetFields();
	}

	handleSubmit = (e)=>{
		e.preventDefault();
	    this.props.form.validateFields((err,data)=>{
	    	if(!err) {
				window.location.href = '/home';
	    	}
	    	
	    })
	}

	render() {

		const { getFieldDecorator } = this.props.form;
		const { forgetPwd } = this.props;

		return(
			<div>
				<div className="userLogin">
					<h2>用户登录</h2>
					<Form  className="login-form">
						<FormItem>
							{
								getFieldDecorator('user',{
									initialValue: '',
									rules: [
										{
											required: true,
											message: '用户名不能为空'
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
										}
									]
								})(
									<Input type="password" prefix={<Icon type={'lock'}/>} 
										placeholder="密码不能为空"/>
								)
							}
						</FormItem>
						<FormItem>
							
							<Checkbox>记住密码</Checkbox>
		          			<a className="login-form-forgot" onClick={forgetPwd}>忘记密码</a>
						
							<Button type="primary" onClick={this.handleSubmit} className="login-form-button">
		            			登录
		          			</Button>
							
						</FormItem>
					</Form>
				</div>
			</div>	
		)
	}
}

const formLogin = Form.create()(userLogin)


export default withRouter(formLogin)
