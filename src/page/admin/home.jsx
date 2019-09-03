import React, { Component } from 'react';
import { Row,Col } from 'antd';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';


export default class ContentPage extends Component {
	render() {
        const cardContent = ['react后台管理系统']
		return(
            <Row>
                <CustomBreadcrumb arr={['main']}/>
                <TypingCard source={cardContent} />
              	<Col span={24} style={{textAlign: "center",fontSize: '18px',}}>
                          
              		<p style={{width:500,background: '#fff'}}>
              			
              		</p>
              	</Col>
            </Row>
		)
	}
}

