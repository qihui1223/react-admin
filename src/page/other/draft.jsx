import React, { Component } from 'react';
import {Card,Row,Col,BackTop} from 'antd';
import BraftEditor from 'braft-editor';
import { ContentUtils } from 'braft-utils';
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';
import 'braft-editor/dist/index.css';


class DraftDemo extends Component{

	state = {
	    editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'), // 设置编辑器初始内容
	    outputHTML: '<p></p>'
	}

	componentDidMount () {
	    this.isLivinig = true
	    // 3秒后更改编辑器内容
	    setTimeout(this.setEditorContentAsync, 3000)
	}

	componentWillUnmount () {
	    this.isLivinig = false
	}

	handleChange = (editorState) => {
	    this.setState({
	      editorState: editorState,
	      outputHTML: editorState.toHTML()
	    })
	}

	setEditorContentAsync = () => {
	    this.isLivinig && this.setState({
	      editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>')
	    })
	}

	

	render(){
		const { editorState,outputHTML } = this.state;
		const cardContent = `富文本编辑braft-utils`
		return(
			<div>
				<CustomBreadcrumb arr={['其他','富文本']}/>
				<TypingCard source={cardContent}/>
				<Card bordered={false} className="card-item">
					<BraftEditor
			            value={editorState}
			            onChange={this.handleChange}
			        />
				</Card>
			</div>
		)
	}
}


export default DraftDemo;
