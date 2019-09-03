import React, { Component } from 'react';
import {Card, Spin, Button, Radio, List, Switch, Avatar,BackTop,Anchor,Affix,Icon} from 'antd'
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';
import axios from 'axios';


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const data3 = []
for(let i=0;i<23;i++){
  	data3.push({
    	title: `ant design part ${i}`,
    	avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    	description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    	content: `We supply a series of design principles, practical patterns and high quality 
    	design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
    	`,
  	})
}

const IconText = ({ type, text }) => (
  	<span>
    	<Icon type={type} style={{ marginRight: 8 }} />
    	{text}
  	</span>
);

class ListDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		size: 'default',
	  		bordered: true,
	  		data2: [],
		    loadingMore: false,
	  	};
	}

	componentDidMount() {
		this.setState({
			loadingMore: true,
		})

		this.getData2();

		this.setState({
			loadingMore: false,
		})
	}

	getData2 = ()=>{
		this.setState({
			loadingMore: true
		})
		axios.get('https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo')
			.then(res=>{
				this.setState({
					data2: this.state.data2.concat(res.data.results),
					loadingMore: false
				})
			})
	}

	render(){
		const { size, bordered, data2, loadingMore } = this.state;
		const cardContent = '最基础的列表展示，可承载文字、列表、图片、段落，常用于后台数据展示页面。'
		const loadMore = (
				<div style={styles.loadMore}>
					{
						loadingMore ? <Spin/> : <Button onClick={() => this.getData2()}>加载更多</Button>
					}
				</div>
			)
		return(
			<div>
				<CustomBreadcrumb arr={['显示','列表']}/>
				<TypingCard source={cardContent} title="如何使用" height={120}/>
				<Card bordered={false} title="基本用法" className="card-item" id='basicUsage'>
					<Radio.Group onChange={(e)=>{this.setState({size: e.target.value})}}>
						<Radio.Button value="small">small</Radio.Button>&emsp;
						<Radio.Button value="default">default</Radio.Button>&emsp;
						<Radio.Button value="large">large</Radio.Button>
					</Radio.Group>
					&emsp;&emsp;&emsp;
          			是否有边框&emsp;
          			<Switch defaultChecked onChange={(checked)=>{this.setState({bordered: checked})}}/>
          			<br />
          			<br />
          			<List
          				dataSource={data}
          				bordered={bordered}
          				size={size}
          				style={bordered ? styles.haveBorder : styles.noBorder}
          				renderItem={item => (<List.Item>{item}</List.Item>)}
          			/>
				</Card>
				<Card bordered={false} title="加载更多" style={{marginBottom: 10}} id="remoteLoading">
					<List
						dataSource={data2}
          				size={size}
          				loadMore={loadMore}
          				style={styles.listStyle}
          				renderItem={item=>(
          					<List.Item actions={[<a href="">edit</a>,
          						 <a href="">more</a>]}>
			                    <List.Item.Meta
			                      avatar={<Avatar
			                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
			                      title={<a href="">{item.name.last}</a>}
			                      description="Ant Design, a design language for background applications, 
			                      is refined by Ant UED Team"
			                    />
			                </List.Item>
          				)}
					/>
				</Card>
				<Card bordered={false} title="竖排列表样式" className="card-item"  id="verticalStyle">
					<List
						dataSource={data3}
						itemLayout='vertical'
		                pagination={{pageSize: 3}}
		                style={styles.listStyle}
		                renderItem={item=>(
		                	<List.Item
		                		actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, 
		                				<IconText type="message" text="2" />]}
                      			extra={<img width={272} alt="logo" 
                      			src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
		                	>
		                		<List.Item.Meta
		                			avatar={<Avatar src={item.avatar} />}
			                        title={<a href="">{item.title}</a>}
			                        description={item.description}
		                		/>
		                			{item.content}
		                	</List.Item>
		                )}
					/>
				</Card>
				<BackTop visibilityHeight={200} style={{right: 50}}/>
				<Affix style={styles.affixBox}>
					<Anchor offsetTop={20} affix={false}>
						<Anchor.Link href="#basicUsage" title="何时使用"/>
						<Anchor.Link href="#remoteLoading" title="加载更多"/>
						<Anchor.Link href="#verticalStyle" title="竖排列表样式"/>
					</Anchor>
				</Affix>
			</div>
		)
	}
}


const styles = {
  	haveBorder: {
   		minHeight: 270,
    	width:'80%',
    	boxSizing: 'border-box'
  	},
  	noBorder: {
    	minHeight: 270,
    	width:'80%',
    	padding: '0 24px',
    	boxSizing: 'border-box',
    	border: '1px solid #fff'
  	},
  	loadMore: {
    	height: 32,
    	marginTop: 16,
    	lineHeight: '32px',
    	textAlign: 'center',
    	marginBottom: 16,
  	},
  	listStyle:{
    	width:'80%'
  	},
  	affixBox:{
    	position: 'absolute',
    	top: 100,
    	right: 50,
    	with: 170
  	}
}

export default ListDemo;