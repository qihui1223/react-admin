/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-14 16:34:08
 * @version $Id$
 */
import React, { Component } from 'react';
import { Form, Icon, Button, Input } from 'antd';
import { Link } from 'react-router-dom';


const FormItem = Form.Item;

class forget extends Component {
	
	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		
		this.props.form.validateFields((err,res)=>{
			if(err){
				console.log(err)
			}
		})
	}

	render() {
		
		const { getFieldDecorator } = this.props.form;

		return(
			<div>				
				<div className="userRegister">
					<h2>忘记密码</h2>
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
									<Input prefix={<Icon type={'lock'}/>} placeholder="请输入密码"/>
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
										}
									]
								})(
									<Input prefix={<Icon type={'lock'}/>} placeholder="请再次输入密码"/>
								)
							}
						</FormItem>
						<FormItem>
							
							<Button type="primary" onClick={this.handleSubmit} className="login-form-button">
		            			登陆
		          			</Button>
							
						</FormItem>
					</Form>
				</div>
			</div>
		)
	}
}

export default Form.create()(forget)
