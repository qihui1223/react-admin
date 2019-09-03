import React, { Component } from 'react';
import {Card, Cascader, Tooltip, Icon, Form, Checkbox, Select, Input, Button, Col, Row} from 'antd'
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';

const FormItem = Form.Item
const Option = Select.Option

const options = [
  {
    label: '湖北',
    value: 'hubei',
    children: [
      {
        label: '武汉',
        value: 'wuhang',
        children: [
          {
            label: '蔡甸区',
            value: 'caidian'
          },
          {
            label: '江夏',
            value: 'jiangxia'
          }
        ]
      },
      {
        label: '宜昌',
        value: 'yichang',
        children: [
          {
            label: '伍家岗',
            value: 'wujiagang'
          },
          {
            label: '夷陵区',
            value: 'yilingqu'
          },
          {
            label: '江南',
            value: 'jiangnan'
          },
          {
            label: '开发区',
            value: 'kaifaqu'
          },
          {
            label: 'CBD',
            value: 'CBD'
          }
        ]
      }
    ]
  }
]


class BasicForm extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		text: '获取验证码',
	  		disabled: false
	  	};
	  	this.timer = 0;
	}

	countdown = (e)=>{
		let time = 60;
		this.setState({
			text: --time + 's',
			disabled: true
		})

		this.timer = setInterval(()=>{
			if(time > 0){
				this.setState({
					text: --time + 's',
					disabled: true
				})
			}else{
				this.setState({
			  		text: '获取验证码',
			  		disabled: false
			  	});
			}
		},1000)
	}

	handleSubmit =(e)=>{
		e.preventDefault();
		this.props.form.validateFields((err,values)=>{
			if (!err) {
		        console.log('Received values of form: ', values);
		    }
		})
	}

	render(){
		const { getFieldDecorator, getFieldValue} = this.props.form;
		const cardContent = '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景';
		const formItemLayout = {
	      labelCol: {
	        xs: {span: 24},
	        sm: {span: 4},
	      },
	      wrapperCol: {
	        xs: {span: 24},
	        sm: {span: 12},
	      },
	    };
	    const tailFormItemLayout = {
	      wrapperCol: {
	        xs: {
	          span: 24,
	          offset: 0,
	        },
	        sm: {
	          span: 12,
	          offset: 4,
	        },
	      },
	    }
	    const prefixSelector = getFieldDecorator('prefix', {
	      	initialValue: 86,
	    })(
	      	<Select style={{width: 70}}>
		        <Option value={86}>+86</Option>
		        <Option value={87}>+87</Option>
	      	</Select>
	    )
		return(
			<div>
				<CustomBreadcrumb arr={['基本组件','基础表单']}/>
				<TypingCard title="何时使用" source={cardContent}/>
				<Card bordered={false} title='基础表单'>
					<Form layout='horizontal' onSubmit={this.handleSubmit} style={{width: '70%', margin: '0 auto'}}>
						<Form.Item label='邮箱' {...formItemLayout}>
							{
								getFieldDecorator('email',{
									rules:[
										{
											type: 'email',
											message: '请填写正确的邮箱'
										},
										{
											required: true,
											message: '邮箱不能为空'
										}
									]
								})(<Input placeholder="email"/>)
							}
						</Form.Item>
						<Form.Item label="密码" {...formItemLayout}>
							{
								getFieldDecorator('password',{
									rules:[
										{
											required: true,
											message: '密码不能为空'
										},
										{
											min: 6,
											message: '密码至少为6位'
										},
										{
											max: 12,
											message: '密码最大为'
										}
									]
								})(<Input type="password"/>)
							}
						</Form.Item>
						<Form.Item label="确认密码" {...formItemLayout}>
							{
								getFieldDecorator('confirm',{
									rules:[
										{
						                    validator: (rule,value,callback)=>{
						                    	const { getFieldValue } = this.props.form;
						                    	if(!getFieldValue('password')){
						                    		callback('请先输入上面的密码！')
						                    	}
						                    	if(value && value !== getFieldValue('password')){
						                    		callback('两次输入不一致！')
						                    	}
						                    	callback()
						                    }
										}
									]
								})(<Input type="password"/>)
							}
						</Form.Item>
						<Form.Item {...formItemLayout} label={(
							<span>
								呢称&nbsp;
								<Tooltip title="请输入你的呢称">
									<Icon type="question-circle-o"/>
								</Tooltip>
							</span>
						)}>
							{
								getFieldDecorator('nickname',{
									rules:[
										{
											required: true,
											message: '呢称不能为空'
										}
									]
								})(<Input/>)
							}
						</Form.Item>
						<Form.Item label="居住地" {...formItemLayout} required>
							{
								getFieldDecorator('residence',{
									rules:[
										{
											type: 'array',
											required: true,
											message: '请输入居住地'
										}
									]
								})(<Cascader options={options} expandTrigger="hover" placeholder=''/>)
							}
						</Form.Item>
						<Form.Item label="电话" {...formItemLayout}>
							{
								getFieldDecorator('mobie',{
									rules: [
										{
					                      	len: 11,
					                      	pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
					                      	required: true,
					                      	message: '请输入正确的11位手机号码'
					                    }
									]
								})(<Input addonBefore={prefixSelector}/>)
							}
						</Form.Item>
						<Form.Item label="验证码" {...formItemLayout}>
							<Row gutter={16}>
								<Col span={12}>
									{
										getFieldDecorator('captcha',{
											rules:[
												{
													required: true,
													message: '请输入验证码'
												}
											]
										})(<Input/>)
									}
								</Col>
								<Col span={12}>
									<Button disabled={this.state.disabled} onClick={(e)=>{this.countdown(e)}}>
									
										{this.state.text}
									</Button>
								</Col>
							</Row>
						</Form.Item>
						<Form.Item {...tailFormItemLayout}>
							{
								getFieldDecorator('agreement',{
									valuePropName: 'checked',
								})(
									<Checkbox>我已阅读并同意<a href="#">协议</a></Checkbox>
								)
							}
						</Form.Item>
						<FormItem style={{textAlign: 'center'}} {...tailFormItemLayout}>
			              	<Button type="primary" htmlType="submit" disabled={!getFieldValue('agreement')}>
			              		提交
			              	</Button>
			            </FormItem>
					</Form>
				</Card>
			</div>
		)
	}
}

export default Form.create()(BasicForm);

