import React, { Component } from 'react';
import {Card,Col,Row,Button,Icon,notification,Select} from 'antd';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';

const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

class NotificationDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {

	  	};
	}

	openNotification = (obj)=>{
		notification.open({
			message: 'notification file',
			description: `This is the content of the notification. 
				This is the content of the notification. This is the content of the notification.`,
			onOk: ()=>{
				console.log('Notification Clicked!');
			},
			...obj
		})
	}

	openNotificationWithIcon = (type)=>{
		notification[type]({
			message: 'notification file',
			description: `This is the content of the notification. 
				This is the content of the notification. This is the content of the notification.`
		})
	}

	customNotification = ()=>{
		notification.open({
			message: 'notification file',
			description: `This is the content of the notification. 
				This is the content of the notification. This is the content of the notification.`,
			icon: <Icon type="smile" style={{color: '#108ee9'}}/>
		})
	}

	openSite = ()=>{
		notification.open({
	    message: 'Notification Title',
	    description: `This is the content of the notification. This is the content of the notification. 
	      This is the content of the notification.`,
	  	});
	}

	render(){
		const cardContent = ` 在系统四个角显示通知提醒信息。经常用于以下情况：
	          <ul class="card-ul">
	            <li>较为复杂的通知内容</li>
	            <li>带有交互的通知，给出用户下一步的行动点</li>
	            <li>系统主动推送</li>
	          </ul>`
		return(
			<div>
				<CustomBreadcrumb arr={['反馈','通知提醒框']}/>
        		<TypingCard source={cardContent} height={180}/>
        		<Row gutter={16}>
        			<Col span={12}>
        				<Card bordered={false} className="card-item">
        					<Button type="primary" onClick={this.openNotification}>
        						基本用法
        					</Button>
        				</Card>
        				<Card bordered={false} className="card-item">
        					<Button type="primary" onClick={()=>this.openNotificationWithIcon('success')}>
        						成功
        					</Button>&emsp;
        					<Button onClick={()=>this.openNotificationWithIcon('info')}>
        						提醒
        					</Button>&emsp;
        					<Button type="danger" onClick={()=>this.openNotificationWithIcon('error')}>
        						错误
        					</Button>&emsp;
        					<Button type="primary" onClick={()=>this.openNotificationWithIcon('warning')}>
        						警告
        					</Button>
        				</Card>
        				<Card bordered={false} className="card-item">
        					<Button type="primary" onClick={this.customNotification}>
        						自定义按钮
        					</Button>
        				</Card>
        			</Col>
        			<Col span={12}>
        				<Card bordered={false} className="card-item">
        					<Button type="primary" onClick={()=>this.openNotification({duration:0})}>
        						取消自动关闭
        					</Button>
        				</Card>
        				<Card bordered={false} className="card-item">
        					<Button type="primary" onClick={()=>this.openNotification({style:{width: 600, marginLeft: 335 - 600,}})}>
        						自定义样式
        					</Button>
        				</Card>
        				<Card bordered={false} title="可以设置通知从右上角、右下角、左下角、左上角弹出" className="card-item">
        					<Select
        						defaultValue="topRight"
        						onChange={val => {
							        notification.config({
							          placement: val,
							        });
							    }}
        					>
        					
        						{
        							options.map(val => (
								        <Option key={val} value={val}>
								          {val}
								        </Option>
								    ))
        						}
        					</Select>&emsp;
        					<Button type="primary" onClick={this.openSite}>
        						打开消息通知
        					</Button>

        					
        				</Card>
        			</Col>
        		</Row>
			</div>
		)
	}
}


export default NotificationDemo;

