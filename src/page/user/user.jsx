/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-08-14 10:17:46
 * @version $Id$
 */
import React,{ Component } from 'react'
import BGParticle from '@/utils/BGParticle'
import Loading from '@/component/Loading';
import Loading2 from '@/component/Loading2';
import Login from './login';
import Register from './register';
import ForgetPwd from './forget';

import 'animate.css';
import styles from './style/style.module.css';

const url = require('./style/img/bg1.jpg');


class User extends Component {

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		showBox: 'login',   //展示当前表单
	    	url: '',  //背景图片
	    	loading:false,
	    	loading2:false,
	    	isLogin: 1,
	  	};
	}

  	componentDidMount () {

    	this.initPage()
    	//preloadingImages(imgs)  //预加载下一个页面的图片，预加载了第二次为什么还会去请求图片资源？
  	}

  	componentWillUnmount () {

    	this.particle.destory()
 	}

  	//载入页面时的一些处理
  	initPage = () => {
    	this.setState({
      		loading:true
    	})
    	//this.props.appStore.initUsers()
   	 	this.loadImageAsync(url).then(url=>{
      		this.setState({
        		loading:false,
        		url
      		})
    	}).then(()=>{
      		//为什么写在then里？id为backgroundBox的DOM元素是在loading为false时才有，而上面的setState可能是异步的，必须等到setState执行完成后才去获取dom
      		this.particle = new BGParticle('backgroundBox')
      		this.particle.init()
    	})
  	}
  	//切换showbox
  	switchShowBox = (box) => {
    	this.setState({
      		showBox: box
    	})
  	}

  	//登录的背景图太大，等载入完后再显示，实际上是图片预加载，
  	loadImageAsync (url) {
    	return new Promise(function(resolve, reject) {
	      		const image = new Image();
	      		image.onload = function() {
	        	resolve(url);
	      	};
	      	image.onerror = function() {
	        	console.log('图片载入错误')
	      	};
	      	image.src = url;
	    });
  	}
	
	goRegister = ()=>{
		const { isLogin } = this.state;

		if(isLogin == 1) {
			this.setState({
				isLogin: 2
			})
		}else {
			this.setState({
				isLogin: 1
			})
		}
	}
	
	forgetPwd = ()=>{
		this.setState({
			isLogin: 3
		})
	} 

	loginPwd = ()=>{
		this.setState({
			isLogin: 1
		})
	}

	renderContent = ()=>{
		const { isLogin } = this.state;
		const { history } = this.props;
		switch(isLogin){
			case 1:
				return (
					<Login forgetPwd={this.forgetPwd} history={history}/>
				)
			case 2:
				return (
					<Register loginPwd={this.loginPwd} history={history}/>
				)
			case 3:
				return (
					<ForgetPwd history={history}/>
				)

		}
	}


  	render () {
    	const { showBox,loading,isLogin } = this.state
	    return (
	      	<div id='login-page'>
	        	{
		          	loading ?
		            <div>
		              	<h3 className={styles.loadingTitle}>载入中...</h3>
		              	<Loading2/>
		            </div>:
		            <div>
		              	<div id='backgroundBox' className={styles.backgroundBox}/>
		              	<div className={styles.container}>
		              		<div className={styles.user}>
								<div className={styles.userContent}>
									<div className={styles.userlogo}>
										<img className={styles.loginLogo} 
											src={require('./style/img/favicon.png')} alt="src" />
									</div>
				               		{this.renderContent()}
				               		<div className={styles.foot}>
										<div className={styles.footerButton}>
										 	{ isLogin === 1 ? '没有账号' : '已有账号' }？
										 	<a onClick={this.goRegister}>{ isLogin === 1 ? '注册' : '登录' }</a>
		          						</div>
		          					</div>
	          					</div>	
							</div>
		              	</div>
		            </div>
	        	}
	     	 </div>
	    )
  }
}


export default User;



