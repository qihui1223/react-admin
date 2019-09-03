/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-19 16:38:41
 * @version $Id$
 */
import React, { Component } from 'react';
import { Layout } from 'antd';
import SliderNav from '@/component/sliderNav'

import './slider.scss';

const { Sider } = Layout;



export default class SiderPage extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {};
	}

	render() {
		return(
			<Sider
                trigger={null}
                breakpoint="lg"
                collapsed={this.props.collapsed}
                style={{ overflowY: 'auto'}}
            >
				<div className="logo">
					<img src={require('@/static/img/avatar.jpg')} alt="头像"/>
				</div>
				<SliderNav/>
			</Sider>
		)
	}
}