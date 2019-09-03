import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import MenuConfig from '@/config/menuConfig'

const SubMenu = Menu.SubMenu;




class SiderNav extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
            openKey: ''
        };
    }

    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode: menuTreeNode
        })
        
    }

    renderMenu = (data)=>{
        return data.map((item)=>{
            if(item.subs){
                return(
                    <SubMenu key={item.key} 
                        title={
                            <span>
                                {item.icon &&<Icon type={item.icon} />}
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        { this.renderMenu(item.subs)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>
                    {item.icon && <Icon type={item.icon}/>}
                    {item.title}
                </NavLink>
            </Menu.Item>
        })
    }


	render(){
		return(
	        <Menu
                theme="dark"
                mode="inline"
                openKeys={[this.state.openKey]}
                onOpenChange={(keys) => this.setState({openKey: keys[keys.length - 1]})}
            >
                { this.state.menuTreeNode }
            </Menu> 
		)
	}
}

export default SiderNav;