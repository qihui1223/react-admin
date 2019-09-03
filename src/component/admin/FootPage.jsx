/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-23 16:37:00
 * @version $Id$
 */
import React, { Component } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export default class FootPage extends Component {
	render() {
		return(
			 <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2019 Created by Ant UED
            </Footer>
		)
	}
}

