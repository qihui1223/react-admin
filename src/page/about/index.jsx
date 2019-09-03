import React, { Component } from 'react';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';



class About extends Component{
	render(){
		const cardContent = `这个人很懒，什么也没留下...`;
		return(
			<div>
				<CustomBreadcrumb arr={['关于']}/>
        		<TypingCard source={cardContent} height={100}/>
			</div>
		)
	}
}


export default About;