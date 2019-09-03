import React, { Component } from 'react';
import {Card, Col, Row, Icon, Tabs, message, Radio} from 'antd';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';

const { TabPane } = Tabs;

class TabDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		mode: "top",
	  		size: "default",
	  	};
	}



	render(){
		const { mode,size } = this.state;
		const cardContent = `提供平级的区域将大块内容进行收纳和展现，保持界面整洁。<br/>
          Ant Design 依次提供了三级选项卡，分别用于不同的场景。
          <ul class="card-ul">
            <li>卡片式的页签，提供可关闭的样式，常用于容器顶部</li>
            <li>标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs</li>
            <li>RadioButton 可作为更次级的页签来使用</li>
          </ul>`
		return(
			<div>
				<CustomBreadcrumb arr={['显示','标签页']}/>
        		<TypingCard source={cardContent} height={202}/>
        		<Row gutter={16}>
        			<Col span={12}>
        				<Card bordered={false} title="基本用法" className="card-item">					
							<Tabs defaultActiveKey="1" onChange={e => message.info('选中标签页' + e)}>
								<TabPane tab="tab 1" key="1">
									Content of Tab Pane 1
								</TabPane>
								<TabPane tab="tab 2" key="2">
									Content of Tab Pane 2
								</TabPane>
								<TabPane tab="tab 3" key="3">
									Content of Tab Pane 3
								</TabPane>
							</Tabs>
        				</Card>
        				<Card bordered={false} title="带图标" className="card-item">
        					<Tabs defaultActiveKey="2">
        						<TabPane key="1" tab={
        							<span>
        								<Icon type="apple"/>
        								Tab 1
        							</span>
        						}>
									Content of Tab Pane 1
								</TabPane>
								<TabPane key="2" tab={
        							<span>
        								<Icon type="android"/>
        								Tab 2
        							</span>
        						}>
									Content of Tab Pane 2
								</TabPane>
        					</Tabs>
        				</Card>
        				<Card bordered={false} title="大小-可设置标签页大小" className="card-item">	
        					<div style={{marginBottom: '1em'}}>
        						<Radio.Group value={size} 
        							onChange={e=>this.setState({size: e.target.value})}>
        							<Radio.Button value="small">small</Radio.Button>
        							<Radio.Button value="default">default</Radio.Button>
        							<Radio.Button value="large">default</Radio.Button>
        						</Radio.Group>
        					</div>
        					<Tabs defaultActiveKey="1" size={size} onChange={e => message.info('选中标签页' + e)}>
								<TabPane tab="tab 1" key="1">
									Content of Tab Pane 1
								</TabPane>
								<TabPane tab="tab 2" key="2">
									Content of Tab Pane 2
								</TabPane>
								<TabPane tab="tab 3" key="3">
									Content of Tab Pane 3
								</TabPane>
							</Tabs>
        				</Card>
        			</Col>
        			<Col span={12}>
        				<Card bordered={false} title="禁用某一项" className="card-item">					
							<Tabs defaultActiveKey="1" onChange={e => message.info('选中标签页' + e)}>
								<TabPane tab="tab 1" key="1">
									Content of Tab Pane 1
								</TabPane>
								<TabPane tab="tab 2" disabled key="2">
									Content of Tab Pane 2
								</TabPane>
								<TabPane tab="tab 3" key="3">
									Content of Tab Pane 3
								</TabPane>
							</Tabs>
        				</Card>
        				<Card bordered={false} title="滑动-可左右滑动" className="card-item">
        					<div style={{marginBottom: '1em'}}>
        						<Radio.Group value={mode} 
        							onChange={e=>this.setState({mode: e.target.value})}>
        							<Radio.Button value="top">水平</Radio.Button>
        							<Radio.Button value="left">垂直</Radio.Button>
        						</Radio.Group>
        					</div>
        					<Tabs defaultActiveKey="1" tabPosition={mode} style={{height: 220}}>
        						{
        							[...Array(10).keys()].map(i=>{
        								return(
        									<TabPane tab={`tab-${i+1}`} key={i+1}>
        										Content of tab {i+1}
        									</TabPane>
        								)
        							})
        						}
        					</Tabs>
        				</Card>
        			</Col>
        		</Row>
			</div>
		)
	}
}


export default TabDemo;