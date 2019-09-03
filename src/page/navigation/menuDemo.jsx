import React, { Component } from 'react';
import {Card, Col, Row, Menu, Icon, Switch} from 'antd'
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';

class MenuDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		openKey: '',
		    theme: 'light',
		    mode: 'horizontal'
	  	};
	}

	changeTheme = (checked)=>{
		this.setState({
			theme: checked ? "dark" : "light"
		})
	}

	changeMode = (checked)=>{
		this.setState({
			mode: checked ? "inline" : "horizontal"
		})
	}

	render(){

		const cardContent = `导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。
			一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。
		`
		const { theme, mode } = this.state;

		return(
			<div>
				<CustomBreadcrumb arr={['导航','导航菜单']}/>
				<TypingCard title="何时使用" source={cardContent}/>
				<Row gutter={16}>
					<Col span={12}>
						<Card bordered={false} className="card-item">
							<Row type="flex" align="middle">
								<Col span={12}>
									<Menu mode="inline" style={{width:200}}>
										<Menu.SubMenu key="mail" title={
											<span>
												<Icon type="mail"/>
												<span>navigator one</span>
											</span>
										}>
											<Menu.Item>subItem1</Menu.Item>
											<Menu.Item>subItem2</Menu.Item>
											<Menu.Item>subItem3</Menu.Item>
										</Menu.SubMenu>
										<Menu.Item key="app" disabled><Icon type="appstore"/>navigator two</Menu.Item>
										<Menu.SubMenu key="set" title={
											<span>
												<Icon type="setting"/>
												<span>navigator three</span>
											</span>
										}>
											<Menu.Item>subItem1</Menu.Item>
											<Menu.Item>subItem2</Menu.Item>
											<Menu.Item>subItem3</Menu.Item>
										</Menu.SubMenu>
									</Menu>
								</Col>
								<Col span={12}>
									内嵌菜单<br/>
                  					垂直菜单，子菜单内嵌在菜单区域。
								</Col>
							</Row>
						</Card>
						<Card bordered={false} className="card-item">
							<Row type="flex" align="middle">
								<Col span={12}>
									<Menu mode="inline"
										style={{ width: 200 }}
								        openKeys={[this.state.openKey]}
								        onOpenChange={(keys) => this.setState({openKey: keys[keys.length - 1]})}>
										<Menu.SubMenu key='sub1' title={
											<span>
												<Icon type="mail"/>
												<span>navigator one</span>
											</span>
										}>
											<Menu.Item>subItem1</Menu.Item>
											<Menu.Item>subItem2</Menu.Item>
											<Menu.Item>subItem3</Menu.Item>
										</Menu.SubMenu>
										<Menu.Item key="app" disabled><Icon type="appstore"/>navigator two</Menu.Item>
										<Menu.SubMenu kkey='sub2' title={
											<span>
												<Icon type="setting"/>
												<span>navigator three</span>
											</span>
										}>
											<Menu.Item>subItem1</Menu.Item>
											<Menu.Item>subItem2</Menu.Item>
											<Menu.Item>subItem3</Menu.Item>
										</Menu.SubMenu>
									</Menu>
								</Col>
								<Col span={12}>
									只展开当前父级菜单<br />
									点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。
								</Col>
							</Row>
						</Card>
					</Col>
					<Col span={12}>
						<Card bordered={false} style={styles.Item}>
							<Menu mode="horizontal">
								<Menu.SubMenu key="mail" title={
									<span>
										<Icon type="mail"/>
										<span>navigator one</span>
									</span>
								}>
									<Menu.Item>subItem1</Menu.Item>
									<Menu.Item>subItem2</Menu.Item>
									<Menu.Item>subItem3</Menu.Item>
								</Menu.SubMenu>
								<Menu.Item key="app" disabled><Icon type="appstore"/>navigator two</Menu.Item>
								<Menu.SubMenu key="set" title={
									<span>
										<Icon type="setting"/>
										<span>navigator three</span>
									</span>
								}>
									<Menu.Item>subItem1</Menu.Item>
									<Menu.Item>subItem2</Menu.Item>
									<Menu.Item>subItem3</Menu.Item>
								</Menu.SubMenu>
							</Menu>
						</Card>
						<Card bordered={false} className="card-item">
							<p style={{paddingLeft: 15}}>
								<Switch size='small' onChange={this.changeMode}/> Change Mode &emsp;
                				<Switch size='small' onChange={this.changeTheme}/> Change Theme
							</p>
							<Menu mode={mode} theme={theme} ref="menu">
								<Menu.SubMenu key="mail" title={
									<span>
										<Icon type="mail"/>
										<span>navigator one</span>
									</span>
								}>
									<Menu.Item>subItem1</Menu.Item>
									<Menu.Item>subItem2</Menu.Item>
									<Menu.Item>subItem3</Menu.Item>
								</Menu.SubMenu>
								<Menu.Item key="app" disabled><Icon type="appstore"/>navigator two</Menu.Item>
								<Menu.SubMenu key="set" title={
									<span>
										<Icon type="setting"/>
										<span>navigator three</span>
									</span>
								}>
									<Menu.Item>subItem1</Menu.Item>
									<Menu.Item>subItem2</Menu.Item>
									<Menu.Item>subItem3</Menu.Item>
								</Menu.SubMenu>
							</Menu>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}


const styles = {
  Item:{
    height:190,
    marginBottom:10,
    borderRadius: 3,
  }
}

export default MenuDemo;