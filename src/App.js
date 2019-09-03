import React, { Component } from 'react';
import {  BrowserRouter,Route,Switch} from 'react-router-dom';
import AdminRouter from '@/router/adminRouter';
import './App.css';

class App extends Component {
    render() {
        return (
            <div id="page">
                <BrowserRouter>
                	<div style={{maxHeight: '100%', height: '100%'}}>
	                    <Switch>
	                    	<Route component={AdminRouter}/>
	                    </Switch>
	                </div>
                </BrowserRouter>	
            </div>
        );
    }
}

export default App;