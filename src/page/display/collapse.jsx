import React, { Component } from 'react';
import { Card, Col, Row, Collapse } from 'antd'
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

class CollapseDemo extends Component{
	render(){
		const cardContent = `<ul class="card-ul">
            <li>对复杂区域进行分组和隐藏，保持页面的整洁</li>
            <li>手风琴 是一种特殊的折叠面板，只允许单个内容区域展开</li>
          </ul>`
		return(
			<div>
				<CustomBreadcrumb arr={['显示','折叠面板']}/>
				<TypingCard source={cardContent} title='如何使用' height={178}/>
				<Row gutter={16}>
					<Col span={12}>
						<Card bordered={false} title="基本用法" className="card-item">
							<Collapse defaultActiveKey={['1']}>
								<Panel header="This is panel header 1" key="1">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 2" key="2">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 3" key="3">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 4" key="4">
									<p>{text}</p>
								</Panel>
							</Collapse>
						</Card>
						<Card bordered={false} title="简洁无边框" className="card-item">
							<Collapse bordered={false}>
								<Panel header="This is panel header 1" key="1">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 2" key="2">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 3" key="3">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 4" key="4">
									<p>{text}</p>
								</Panel>
							</Collapse>
						</Card>
					</Col>
					<Col span={12}>
						<Card bordered={false} title="手风琴,每次只打开一个 tab" className="card-item">
							<Collapse accordion>
								<Panel header="This is panel header 1" key="1">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 2" key="2">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 3" key="3">
									<p>{text}</p>
								</Panel>
								<Panel header="This is panel header 4" key="4">
									<p>{text}</p>
								</Panel>
							</Collapse>
						</Card>
						<Card bordered={false} title="嵌套模版">
							<Collapse>
							    <Panel header="This is panel header 1" key="1">
							      	<Collapse defaultActiveKey="1">
							        	<Panel header="This is panel nest panel" key="1">
							          		<p>{text}</p>
							        	</Panel>
							      	</Collapse>
							    </Panel>
							    <Panel header="This is panel header 2" key="2">
							      	<p>{text}</p>
							    </Panel>
							    <Panel header="This is panel header 3" key="3">
							      	<p>{text}</p>
							    </Panel>
							</Collapse>
						</Card>
					</Col>
				</Row>
				
			</div>
		)
	}
}


export default CollapseDemo;