import React, { Component } from 'react';
import {Card, Menu, Row, Col, Dropdown, Icon, message, Button} from 'antd';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';

const { SubMenu } = Menu;

class DropdownDemo extends Component{

	handleMenuClick = (e)=>{
		message.info(`Click on menu ${e.key} item.`)
	}



	render(){
		const cardContent = `当页面上的操作命令过多时，用此组件可以收纳操作元素。
							点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。`

		const menu = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item key="1">1st item</Menu.Item>
				<Menu.Item key="2">2st item</Menu.Item>
				<Menu.Item key="3">3st item</Menu.Item>
			</Menu>
		)

		const menu2 = (
			<Menu onClick={this.handleMenuClick}>
				<Menu.Item>1th menu item</Menu.Item>
				<Menu.Item>2th menu item</Menu.Item>
				<SubMenu title="sub menu">
					<Menu.Item>3th menu item</Menu.Item>
					<Menu.Item>4th menu item</Menu.Item>
				</SubMenu>
				<SubMenu title="disabled sub menu" disabled>
					<Menu.Item>5th menu item</Menu.Item>
					<Menu.Item>6th menu item</Menu.Item>
				</SubMenu>
			</Menu>
		)

		return(
			<div>
				<CustomBreadcrumb arr={['导航','下拉菜单']}/>
				<TypingCard title="何时使用" source={cardContent}/>
				<Row gutter={16}>
					<Col span={12}>
						<Card bordered={false} className="card-item">
							<Dropdown overlay={menu}>
								<a>
									hover me
									<Icon type="down"/>
								</a>
							</Dropdown>&emsp;
							<Dropdown overlay={menu}>
								<Button>
									bottom me
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
							
							<Dropdown overlay={menu} trigger={['click']}>
								<a>
									click me
									<Icon type="down"/>
								</a>
							</Dropdown>&emsp;
						</Card>
						<Card bordered={false} className="card-item">
							<Dropdown overlay={menu2}>
								<a>
									hover me
									<Icon type="down"/>
								</a>
							</Dropdown>&emsp;
							<Dropdown overlay={menu2}>
								<Button>
									bottom me
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
							
							<Dropdown overlay={menu2} trigger={['click']}>
								<a>
									click me
									<Icon type="down"/>
								</a>
							</Dropdown>&emsp;
						</Card>
					</Col>
					<Col span={12}>
						<Card bordered={false} className="card-item">
							<Dropdown overlay={menu2}>
								<a href="">Cascading menu <Icon type="down"/></a>
							</Dropdown>&emsp;&emsp;
              				<Dropdown overlay={menu2}>
              					<Button>Cascading menu <Icon type="down"/></Button>
              				</Dropdown>
						</Card>
						<Card bordered={false} className="card-item">
							<Dropdown overlay={menu2} placement="bottomLeft">
								<Button>
									bottomLeft
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
							<Dropdown overlay={menu2} placement="bottomCenter">
								<Button>
									bottomCenter
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
							<Dropdown overlay={menu2} placement="bottomCenter">
								<Button>
									bottomCenter
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
							<br/>
							<br/>
							<Dropdown overlay={menu2} placement="topLeft">
								<Button>
									topLeft
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
							<Dropdown overlay={menu2} placement="topCenter">
								<Button>
									topCenter
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
							<Dropdown overlay={menu2} placement="topRight">
								<Button>
									topRight
									<Icon type="down"/>
								</Button>
							</Dropdown>&emsp;
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}


export default DropdownDemo;