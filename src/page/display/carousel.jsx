import React, { Component } from 'react';
import { Carousel, Radio, Card } from 'antd';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';
import './style/slider.css';


class CarouselDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		dotPosition: 'bottom'
	  	};
	}


  	handlePositionChange = (e)=>{
  		this.setState({
  			dotPosition: e.target.value
  		})
  	}

	render(){
		const { dotPosition } = this.state;
		const cardContent = `<ul class="card-ul">
            <li>当有一组平级的内容</li>
            <li>当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现</li>
            <li>常用于一组图片或卡片轮播</li>
          </ul>`
		return(
			<div>
				<CustomBreadcrumb arr={['显示','轮播图']}/>
				<TypingCard title="何时使用" source={cardContent} height={210}/>
				<Card bordered={false} className="card-item" title="轮播图">
					<Radio.Group
			          	onChange={this.handlePositionChange}
			          	value={dotPosition}
			          	style={{ marginBottom: 8 }}
			        >
			          	<Radio.Button value="top">Top</Radio.Button>&emsp;
			          	<Radio.Button value="bottom">Bottom</Radio.Button>&emsp;
			          	<Radio.Button value="left">Left</Radio.Button>&emsp;
			          	<Radio.Button value="right">Right</Radio.Button>
			        </Radio.Group>
			        <Carousel dotPosition={dotPosition} effect="fade">
			          	<div>
			            	<h3>1</h3>
			          	</div>
			          	<div>
			            	<h3>2</h3>
			          	</div>
			          	<div>
			            	<h3>3</h3>
			          	</div>
			          	<div>
			            	<h3>4</h3>
			          	</div>
			        </Carousel>
				</Card>
			</div>
		)
	}
}


export default CarouselDemo;