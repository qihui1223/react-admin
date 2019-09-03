import React, { Component } from 'react';
import {Card, Col, Row, Icon, Upload, message, Button, Modal } from 'antd'
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';

const { Dragger } = Upload;

const props = {
	name: 'file',
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	headers: {
		authorization: 'authorization-text',
	},
	onChange(info){
		const { status } = info.file;
		if(status !== 'uploading'){
			console.log(info.file, info.fileList);
		}
		if(status === 'done'){
			message.success(`${info.file.name} file uploaded successful`)
		}
		if(status === 'error'){
			message.error(`${info.file.name} file uoloaded fail`)
		}
	}
}

const props2 = {
	name: 'file',
	multiple: true,
	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
	onChange(info){
		const { status } = info.file;
		if(status !== 'uploading'){
			console.log(info.file, info.fileList);
		}
		if(status === 'done'){
			message.success(`${info.file.name} file uploaded successful`)
		}
		if(status === 'error'){
			message.error(`${info.file.name} file uoloaded fail`)
		}
	}
}

function getBase64(img, callback) {
  	const reader = new FileReader();
  	reader.addEventListener('load', () => callback(reader.result));
  	reader.readAsDataURL(img);
}



class UploadDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		previewVisible: false,
    		previewImage: '',
    		loading: false,
	  		fileList: [
		      {
		        uid: '-1',
		        name: 'image.png',
		        status: 'done',
		        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		      },
		      {
		        uid: '-2',
		        name: 'image.png',
		        status: 'done',
		        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		      },
		      {
		        uid: '-3',
		        name: 'image.png',
		        status: 'done',
		        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		      },
		      {
		        uid: '-4',
		        name: 'image.png',
		        status: 'done',
		        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		      },
		      {
		        uid: '-5',
		        name: 'image.png',
		        status: 'done',
		        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		      },
		    ],
	  	};
	}

	beforeUpload = (file)=>{
	  	const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
	  	if (!isJpgOrPng) {
	   		message.error('You can only upload JPG/PNG file!');
	  	}
	  	const isLt2M = file.size / 1024 / 1024 < 2;
	  	if (!isLt2M) {
	   		message.error('Image must smaller than 2MB!');
	  	}
	  	return isJpgOrPng && isLt2M;
	}

	handlePreview = async (file)=>{
		if( !file.url && file.preview){
			file.preview = await getBase64(file.originFileObj);
		}
		this.setState({
			previewImage: file.url || file.preview,
			previewVisible: true
		})
	}

	handleChange =(info)=>{
		if(info.file.status === 'uploading'){
			this.setState({
				loading: true
			})
			return;
		}
		if (info.file.status === 'done') {
	      	// Get this url from response in real world.
	      	getBase64(info.file.originFileObj, imageUrl =>
		        this.setState({
		          imageUrl,
		          loading: false,
		        }),
	      	);
	    }else if(info.file.status === 'error'){
			message.error(`${info.file.name} 文件上传失败（${info.file.error.message}）`);
			this.setState({
				loading: false
			})
		}
	}

	render(){
		const { previewVisible, previewImage, fileList, imageUrl } = this.state;
		const cardContent = `上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
          <ul class="card-ul">
            <li>当需要上传一个或一些文件时</li>
            <li>当需要展现上传的进度时</li>
            <li>当需要使用拖拽交互时</li>
          </ul>`
        const uploadButton = (
		    <div>
		        <Icon type="plus"/>
		        <div className="ant-upload-text">Upload</div>
		    </div>
		);
		const userButton = (
	      	<div>
		        <Icon type={this.state.loading ? 'loading' : 'plus'} />
		        <div className="ant-upload-text">Upload</div>
	      	</div>
	    );
		return(
			<div>
				<CustomBreadcrumb arr={['基本组件','上传']}/>
				<TypingCard title="何时使用" source={cardContent} height={234}/>
				<Row gutter={16}>
					<Col span={12}>
						<Card bordered={false} className='card-item' title='基本用法'>
							<Upload {...props}>
								<Button>
									<Icon type="upload"/>click to upload
								</Button>
							</Upload>
						</Card>
						<Card bordered={false} style={{...styles.colItem, minHeight: 255}} title='照片墙'>
              				<Upload
						          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
						          listType="picture-card"
						          fileList={fileList}
						          onPreview={this.handlePreview}
						          onChange={({fileList}) => this.setState({fileList})}
						        >
						        {fileList.length >= 8 ? null : uploadButton}
						    </Upload>
					        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
					          	<img alt="example" style={{ width: '100%' }} src={previewImage} />
					        </Modal>
            			</Card>
					</Col>
					<Col span={12}>
						<Card bordered={false} className="card-item" title="用户头像上传">
							<Row type='flex' align='middle'>
								<Col span={8}>
									<Upload
					                    name="avatar"
					                    showUploadList={false}
					                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
					                    beforeUpload={this.beforeUpload}
					                    onChange={this.handleChange}
					                    listType="picture-card">
					                    { imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }}/> : userButton}
					                </Upload>
								</Col>
								<Col span={16}>
									点击上传用户头像，并使用 beforeUpload 限制用户上传的图片格式和大小
								</Col>
							</Row>
						</Card>
						<Card bordered={false} className="card-item" title="拖拽上传">
							<Dragger {...props2}>
								<p className="ant-upload-drag-icon">
							      	<Icon type="inbox" />
							    </p>
							    <p className="ant-upload-text">Click or drag file to this area to upload</p>
							    <p className="ant-upload-hint">
							      	Support for a single or bulk upload. Strictly prohibit from uploading company data or other
							      	band files
							    </p>
							</Dragger>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}


const styles = {
	colItem: {
	    minHeight: 230,
	    borderRadius: 3,
	    margin: '10px 0'
	}
}


export default UploadDemo;