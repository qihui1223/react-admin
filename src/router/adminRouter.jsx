import React, { Component } from 'react';
import { Router,Route,Switch } from 'react-router-dom';
import LoadPage from '@/utils/loadPage';


const Login = LoadPage(()=>import('@/page/user/user'));

const Admin = LoadPage(()=>import('@/page/admin/index'));
const Home 	= LoadPage(()=>import('@/page/admin/home'));


//基本组件
const ButtonDemo = LoadPage(()=>import('@/page/general/buttonDemo'));
const IconDemo = LoadPage(()=>import('@/page/general/iconDemo'));

//导航组件
const DropdownDemo = LoadPage(()=>import('@/page/navigation/dropdownDemo'));
const MenuDemo = LoadPage(()=>import('@/page/navigation/menuDemo'));
const StepsDemo = LoadPage(()=>import('@/page/navigation/stepsDemo'));

//基本组件
const BasicForm = LoadPage(()=>import('@/page/entry/basicForm'));
const UploadDemo = LoadPage(()=>import('@/page/entry/uploadDemo'));

//显示组件
const CarouselDemo = LoadPage(()=>import('@/page/display/carousel'));
const CollapseDemo = LoadPage(()=>import('@/page/display/collapse'));
const ListDemo = LoadPage(()=>import('@/page/display/list'));
const TableDemo = LoadPage(()=>import('@/page/display/table'));
const TabsDemo = LoadPage(()=>import('@/page/display/tabs'));

//反馈组件Demo
const ModalDemo = LoadPage(()=>import('@/page/feedback/modal'));
const NotificationDemo = LoadPage(()=>import('@/page/feedback/notification'));
const SpinDemo = LoadPage(()=>import('@/page/feedback/spin'));

//其他
const GalleryDemo = LoadPage(()=>import('@/page/other/gallery'));
const ChartDemo = LoadPage(()=>import('@/page/other/chart'));
const DraftDemo = LoadPage(()=>import('@/page/other/draft'));

//关于
const About = LoadPage(()=>import('@/page/about'));


/*
//其它
const AnimationDemo = LoadableComponent(()=>import('../../routes/Other/AnimationDemo/index'))
const GalleryDemo = LoadableComponent(()=>import('../../routes/Other/GalleryDemo/index'))
const DraftDemo = LoadableComponent(()=>import('../../routes/Other/DraftDemo/index'))
const ChartDemo = LoadableComponent(()=>import('../../routes/Other/ChartDemo/index'))
const LoadingDemo = LoadableComponent(()=>import('../../routes/Other/LoadingDemo/index'))
const ErrorPage = LoadableComponent(()=>import('../../routes/Other/ErrorPage/index'))
const SpringText = LoadableComponent(()=>import('../../routes/Other/SpringText/index'))

//关于
const About = LoadableComponent(()=>import('../../routes/About/index'))
*/

class AdminRouter extends Component{
	render(){
		return(
			<div className="App" style={{maxHeight: '100%', height: '100%'}}>
				<Switch>
					<Route  exact path='/' component={Login}/>
					<Route exact path="/login" component={Login}/>
					<Route path="/" render={()=>
	                    <Admin>
	                    	<Switch> 
			                    <Route  exact path='/home' component={Home}/>
			                    <Route  exact path='/home/general/button' component={ButtonDemo}/>
			                    <Route  exact path='/home/general/icon' component={IconDemo}/>
			                    <Route  exact path='/home/navigation/dropdown' component={DropdownDemo}/>
			                    <Route  exact path='/home/navigation/menu' component={MenuDemo}/>
			                    <Route  exact path='/home/navigation/steps' component={StepsDemo}/>
			                    <Route  exact path='/home/entry/basic-form' component={BasicForm}/>
			                    <Route  exact path='/home/entry/upload' component={UploadDemo}/>
			                    <Route  exact path='/home/display/carousel' component={CarouselDemo}/>
			                    <Route  exact path='/home/display/collapse' component={CollapseDemo}/>
			                    <Route  exact path='/home/display/list' component={ListDemo}/>
			                    <Route  exact path='/home/display/table' component={TableDemo}/>
			                    <Route  exact path='/home/display/tabs' component={TabsDemo}/>
			                    <Route  exact path='/home/feedback/modal' component={ModalDemo}/>
			                    <Route  exact path='/home/feedback/notification' component={NotificationDemo}/>
			                    <Route  exact path='/home/feedback/spin' component={SpinDemo}/>
			                    <Route  exact path='/home/other/gallery' component={GalleryDemo}/>
			                    <Route  exact path='/home/other/chart' component={ChartDemo}/>
			                    <Route  exact path='/home/other/draft' component={DraftDemo}/>
			                    <Route  exact path='/home/about' component={About}/>
		                    </Switch>
		                </Admin>        
	                }/>
				</Switch>
				
			</div>
		)
	}
}


export default AdminRouter;