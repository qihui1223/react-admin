import React, { Component } from 'react';
import { Card, Row, Col,BackTop } from 'antd';
import { Chart, Axis, Geom, Tooltip, Coord, Label, Legend, G2 } from 'bizcharts';
import { View } from '@antv/data-set';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';
import chartData from '@/config/chartData';

const cols = {
  	'value': {min: 0},
  	'year': {range: [0, 1]}
}

const cols2 = {
  	'sales': {tickInterval: 20},
}

const dv3 = new View()
dv3.source(chartData.data3).transform({
  	type: 'percent',
  	field: 'count',
  	dimension: 'item',
  	as: 'percent'
})

const cols3 = {
  	percent: {
	    formatter: val => {
	      	val = (val * 100) + '%'
	      	return val
	    }
  	}
}



class ChartDemo extends Component{
	render(){
		const cardContent = `此页面用到的图表插件是<a">bizcharts</a>`
		return(
			<div>
				<CustomBreadcrumb arr={['其他','图表']}/>
				<TypingCard source={cardContent}/>
				<Row gutter={10}>
					<Col span={12}>
						<Card title='基础折线图' bordered={false} className='card-item'>
			              	<Chart height={400} data={chartData.data} scale={cols} forceFit>
			                <Axis name="year"/>
				                <Axis name="value"/>
				                <Tooltip crosshairs={{type: 'y'}}/>
				                <Geom type="line" position="year*value" size={2}/>
				                <Geom type='point' position="year*value" size={4} shape={'circle'}
				                      style={{stroke: '#fff', lineWidth: 1}}/>
			              	</Chart>
			            </Card>
					</Col>
					<Col span={12}>
			            <Card title='基础柱状图' bordered={false} className='card-item'>
			              	<Chart height={400} data={chartData.data2} scale={cols2} forceFit>
			                	<Axis name="year"/>
			                	<Axis name="sales"/>
			                	<Tooltip crosshairs={{type: 'y'}}/>
			                	<Geom type="interval" position="year*sales"/>
			              	</Chart>
			            </Card>
			        </Col>
				</Row>
				<Row gutter={10}>
		          <Col span={12}>
			            <Card title='基础饼图' bordered={false} className='card-item'>
			              	<Chart height={400} data={dv3} scale={cols3} padding={[80, 100, 80, 80]} forceFit>
				                <Coord type='theta' radius={0.75}/>
				                <Axis name="percent"/>
				                {/*<Legend position='right' offsetY={-80} offsetX={-100}/>*/}
				                <Legend position='right' offsetY={-80}/>
				                <Tooltip
				                  	showTitle={false}
				                  	itemTpl='<li><span style="background-color:{color};" 
				                  			class="g2-tooltip-marker"></span>{name}: {value}</li>'
				                />
				                <Geom
				                  	type="intervalStack"
				                  	position="percent"
				                  	color='item'
				                  	tooltip={['item*percent', (item, percent) => {
					                    percent = percent * 100 + '%'
					                    return {
					                      	name: item,
					                      	value: percent
					                    }
				                  	}]}
				                  	style={{lineWidth: 1, stroke: '#fff'}}
				                >
				                  	<Label content='percent' formatter={(val, item) => {
				                    	return item.point.item + ': ' + val
				                  	}}/>
				                </Geom>
			              	</Chart>
			            </Card>
		          	</Col>
		        </Row>
		        <BackTop visibilityHeight={200} style={{right: 50}}/>
			</div>
		)
	}
}

export default ChartDemo;