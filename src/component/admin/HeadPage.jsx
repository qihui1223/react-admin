/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-23 17:03:51
 * @version $Id$
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout,Menu,Icon,Row,Col,Badge,Avatar } from 'antd';

import './style/head.scss';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeadPage extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
			getTime: ''
	  	};
	}

	componentWillMount (){
		this.setState({
			userName: '齐辉'
		})	

	
	}
	
	componentDidMount() {
		
	}

	toggle = ()=>{
		this.props.onToggle();
	}

	render() {
		const { userName } = this.state;
		const { collapsed } = this.props;
		return(
			<Header className="head">
				<Row className="headTop">
					<Col span={4} className="title">
						<Icon
                            className="trigger custom-trigger"
                            type={collapsed ? 'menu-unfold' : 'menu-fold'}
                            style={{ fontSize: 16 }}
                            onClick={this.toggle}
                        />
					</Col>
					<Col span={20} className="titleContent">
						<Menu
							className="menuRight"
							mode="horizontal"
						>
							<Menu.Item key="full" onClick={this.screenFull} >
		                        <Icon type="arrows-alt" style={{ fontSize: 16 }} onClick={this.screenFull} />
		                    </Menu.Item>
		                    <Menu.Item>
		                    	<Badge count={10} overflowCount={10}>
		                    		<Icon style={{ fontSize: 16 }} type="notification" />
		                    	</Badge>
		                    </Menu.Item>
		                    <SubMenu title={<Avatar src={require('./style/img/avatar.jpg')}/>}>
		                    	<MenuItemGroup title="用户中心">
									<Menu.Item key="setting:1">你好-{userName}</Menu.Item>
									<Menu.Item key="setting:2">个人信息</Menu.Item>
									<Menu.Item key="setting:3">
										<Link to="/login">
											退出登录
										</Link>
									</Menu.Item>
		                    	</MenuItemGroup>
		                    	<MenuItemGroup title="用户设置">
									<Menu.Item key="setting:4">系统设置-</Menu.Item>
									<Menu.Item key="setting:5">个人设置</Menu.Item>
		                    	</MenuItemGroup>
		                    </SubMenu>
						</Menu>
					</Col>
				</Row>
				
				{/*<Row className="headTop">
					<Col span="24">
						欢迎您，
						<span className="userName">{userName}</span>
						<a className="logout" href="#">退出</a>
					</Col>
				</Row>
				<Row className="topTitle">
					<Col span="4" className="title">
						首页
					</Col>
					<Col span="20" className="titleContent">
						<span>{getTime}</span>
					</Col>
				</Row>*/}
			</Header>
		)
	}
}


export default HeadPage;