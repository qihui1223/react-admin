import React, { Component } from 'react'
import Loadable from 'react-loadable'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


class LoadComponent extends Component {

	//类似github页面加载的那个加载条
	componentWillMount() {
		NProgress.start();
	}

	componentWillUnmount() {
		NProgress.done();
	}

	render(){
		return(
			<div/>
		)
	}
}


const LoadPage = (component)=>{
	return Loadable({
		loader: component,
		loading: ()=><LoadComponent/>
	})
}

export default LoadPage;