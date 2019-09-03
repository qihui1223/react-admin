import React, { Component } from 'react';
import {Card, Col, Row, Spin, Icon, Alert, Switch, Button} from 'antd'
import NProgress from 'nprogress'
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';



class SpinDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		loading: false,
	  		loading2: false
	  	};
	}

	toggle = (value)=>{
		this.setState({
			loading: value
		})
	}

	NProgressStart = ()=>{
		NProgress.start()
		this.setState({
			loading2: false
		})
	}

	NProgressDone = ()=>{
		NProgress.done()
		this.setState({
			loading2: false
		})
	}

	render(){
		const { loading2 } = this.state;
		const cardContent = `页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。`;
		return(
			<div>
				<CustomBreadcrumb arr={['反馈','加载中']}/>
        		<TypingCard source={cardContent} height={100}/>
        		<Row gutter={16}>
        			<Col span={12}>
        				<Card bordered={false} className="card-item">
		        			<Spin/>&emsp;
		        			<Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin/>}/>
		        		</Card>
		        		<Card bordered={false} className="card-item">
		        			<Spin tip="loading...">
		        				<Alert
		        					message="Alert message title"
								    description="Further details about the context of this alert."
								     type="info"
		        				/>
		        			</Spin>
		        		</Card>
		        		<Card bordered={false} className="card-item">
		        			<Button onClick={this.NProgressStart} loading={loading2}>页面顶部进度条加载</Button>&emsp;
              				<Button onClick={this.NProgressDone}>顶部进度条加载完成</Button>
		        		</Card>
        			</Col>
        			<Col span={12}>
        				<Card bordered={false} className="card-item">
        					<Spin size="small" />&emsp;
						    <Spin />&emsp;
						    <Spin size="large" />
        				</Card>
        				<Card bordered={false} className="card-item">
		        			<Spin tip="Loading..." spinning={this.state.loading}>
		        				<Alert
		        					message="Alert message title"
								    description="Further details about the context of this alert."
								     type="info"
		        				/>
		        			</Spin>
		        			<div style={{ marginTop: 16 }}>
		        				Loading state &emsp;
		        				<Switch onChange={(checked)=>this.toggle(checked)}/>
		        			</div>
		        		</Card>
        			</Col>
        		</Row>
			</div>
		)
	}
}


export default SpinDemo;