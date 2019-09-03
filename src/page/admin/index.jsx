/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-15 14:12:12
 * @version $Id$
 */
import React, { Component } from 'react';
import { Layout } from 'antd';


import SiderPage from './subPage/siderPage';
import HeadPage from '@/component/admin/HeadPage';
import FootPage from '@/component/admin/FootPage';


const { Content } = Layout;

export default class Home extends Component {
	
	constructor(props) {
        super(props);
    
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }


	render() {
		return(
			<Layout>
				<SiderPage collapsed={this.state.collapsed}/>
                <Layout>
                    <HeadPage collapsed={this.state.collapsed} onToggle={this.toggle}/>
                    <Content style={{ margin: '16px 16px', overflow: 'initial' }}>
                        <div style={{minHeight: 550 }}>
                            {this.props.children}  
                        </div>
                    </Content>
                    <FootPage/>
                </Layout>
			</Layout>
		)
	}
}