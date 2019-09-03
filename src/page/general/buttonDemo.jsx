import React, { Component } from 'react';
import {Button, Row, Col, Card, Icon, Radio, Dropdown, Menu} from 'antd';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';


class ButtonDemo extends Component{


	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		size: 'default',
	  		loading: false,
	  		iconLoading: false
	  	};
	}

	handleSizeChange  = (e)=>{
		this.setState({
			size: e.target.value
		})
	}

	handleMenuClick = (e)=>{
		console.log('click', e);
	}

	enterLoading = ()=>{
		this.setState({
			loading: true
		})
	}

	iconEnterLoading = ()=>{
		this.setState({
			iconLoading: true
		})
	}

	

	render(){
		const cardContent = `标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。`
		const { size,loading,iconLoading } = this.state;
		const menu = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="1">1st item</Menu.Item>
				<Menu.Item key="2">2st item</Menu.Item>
				<Menu.Item key="3">3st item</Menu.Item>
			</Menu>
		)
		return(
			<div>
				<CustomBreadcrumb arr={['基本','按钮']}/>
				<TypingCard source={cardContent} />
				<Row gutter={16}>
					<Col span={12}>
						<Card bordered={false} className='card-item'>
							<Button type="primary">primary</Button>&emsp;
							<Button type="default">default</Button>&emsp;
							<Button type="dashed">dashed</Button>&emsp;
							<Button type="danger">danger</Button>&emsp;
							<Button type="link">link</Button>
						</Card>
						<Card bordered={false} className="card-item">
							<Radio.Group value={size} onChange={this.handleSizeChange}>
								<Radio.Button value="large">large</Radio.Button>
								<Radio.Button value="default">default</Radio.Button>
								<Radio.Button value="small">Small</Radio.Button>
							</Radio.Group>
							<br />
        					<br />
        					<Button type="primary" size={size}>primary</Button>&emsp;
							<Button type="default" size={size}>default</Button>&emsp;
							<Button type="dashed" size={size}>dashed</Button>&emsp;
							<Button type="danger" size={size}>danger</Button>&emsp;
							<Button type="link">link</Button>
							<br />
							<br />
							<Button type="primary" shape="circle" icon="download" size={size}/>&emsp;
							<Button type="primary" shape="round" icon="download" size={size}>
								DownLoad
							</Button>&emsp;
							<Button type="primary" icon="download" size={size}>
								DownLoad
							</Button>
							<br />
							<br />
							<Button.Group size={size}>
								<Button type="primary">
									<Icon type="left"/>
									Backward
								</Button>&emsp;
								<Button type="primary">
									<Icon type="right"/>
									Forward
								</Button>
							</Button.Group>
						</Card>
					</Col>
					<Col span={12}>
						<Card bordered={false} className="card-item">
							<Button type="primary" shape="circle" icon="search"/>&emsp;
							<Button type="primary" icon="search">
								Search
							</Button>&emsp;
							<Button shape="circle" icon="search"/>&emsp;
							<Button icon="search">
								Search
							</Button>
							<br />
							<br />
						    <Button type="dashed" shape="circle" icon="search" />
						    <Button type="dashed" icon="search">Search</Button>
						</Card>
						<Card bordered={false} className="card-item">
							<Button type="primary">primary</Button>&emsp;
							<Button>secondary</Button>&emsp;
							<Dropdown overlay={menu}>
								<Button>
									Actions<Icon type="down"/>
								</Button>
							</Dropdown>
						</Card>
						<Card bordered={false} className="card-item">
							<Button type="primary" size="small" loading>loading</Button>&emsp;
							<Button shape="circle" loading/>&emsp;
							<br />
							<br />
							<Button type="primary" loading={loading} onClick={this.enterLoading}>
								click me!
							</Button>&emsp;
							<Button type="primary"
								icon="poweroff"
								loading={iconLoading}
								onClick={this.iconEnterLoading}
							>
								click me!
							</Button>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}



export default ButtonDemo;