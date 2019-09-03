import React, { Component } from 'react';
import { Card, Button, Icon, Table, Divider } from 'antd'
import CustomBreadcrumb from '@/component/customBreadcrumb';
import TypingCard from '@/component/typingCard';


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}]

const columns = [
	{
		title: 'name',
		dataIndex: 'name',
		key: 'name',
		render: (text)=>(
			<a href="">{text}</a>
		)
	},{
		title: 'age',
		dataIndex: 'age',
		key: 'age',
	},{
		title: 'address',
		dataIndex: 'address',
		key: 'address'
	},{
		title: 'Action',
    	key: 'action',
    	render: (text,record)=>(
    		<span>
    			<a href=""> Action --- {record.name}</a>
    			<Divider type="vertical" />
    			<a href="">delete</a>
    			<Divider type="vertical" />
    			<a href="" className="ant-dropdown-link">
    				More actions <Icon type="down"/>
    			</a>
    		</span>
    	)
	}
]

const data2 = [
	{
	    key: '1',
	    name: 'John Brown',
	    age: 32,
	    address: 'New York No. 1 Lake Park',
	},
	{
	    key: '2',
	    name: 'Jim Green',
	    age: 42,
	    address: 'London No. 1 Lake Park',
	},
	{
	    key: '3',
	    name: 'Joe Black',
	    age: 32,
	    address: 'Sidney No. 1 Lake Park',
	},
	{
	    key: '4',
	    name: 'Disabled User',
	    age: 99,
	    address: 'Sidney No. 1 Lake Park',
	},
]

const columns2 = [
	{
		title: 'name',
		dataIndex: 'name',
		key: 'name',
		render: text=><a href="">{text}</a>
	},{
		title: 'age',
		dataIndex: 'age',
		key: 'age',
	},{
		title: 'address',
		dataIndex: 'address',
		key: 'address'
	}
]

const data3 = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  }]

const rowSelection = {
	onChange: (selectedRowKeys,selectedRows)=>{
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
	},
	getCheckboxProps: (record)=>({
		disabled: record.name === 'Disabled User',
    	name: record.name,
	})
}


class TableDemo extends Component{

	constructor(props) {
	  	super(props);
	
	  	this.state = {
	  		filteredInfo: null,
    		sortedInfo: null,
    		pagination: {
		      pageSize: 8
		    },
	  	};
	}

	setSort = (type) => {
    	this.setState({
      		sortedInfo: {
        		order: 'descend',
        		columnKey: type,
      		},
    	})
  	}

  	clearFilters = ()=>{
  		this.setState({
  			filteredInfo: null
  		})
  	}

  	clearAll = ()=>{
  		this.setState({
  			filteredInfo: null,
    		sortedInfo: null,
  		})
  	}

  	handleChange = (pagination, filters, sorter)=>{
  		this.setState({
      		filteredInfo: filters,
      		sortedInfo: sorter,
    	})
  	}


	render(){
		const cardContent = `<ul class="card-ul">
            <li>当有大量结构化的数据需要展现时</li>
            <li>标当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时</li>
          </ul>`

        let {sortedInfo, filteredInfo} = this.state
    	sortedInfo = sortedInfo || {}
    	filteredInfo = filteredInfo || {}

    	const columns3 = [
	      {
	        title: 'Name',
	        dataIndex: 'name',
	        key: 'name',
	        filters: [
	          {text: 'Joe', value: 'Joe'},
	          {text: 'Jim', value: 'Jim'},
	        ],
	        filteredValue: filteredInfo.name || null,
	        onFilter: (value, record) => record.name.includes(value),
	        sorter: (a, b) => a.name.length - b.name.length,
	        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
	      }, {
	        title: 'Age',
	        dataIndex: 'age',
	        key: 'age',
	        sorter: (a, b) => a.age - b.age,
	        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
	      }, {
	        title: 'Address',
	        dataIndex: 'address',
	        key: 'address',
	        filters: [
	          {text: 'London', value: 'London'},
	          {text: 'New York', value: 'New York'},
	        ],
	        filteredValue: filteredInfo.address || null,
	        onFilter: (value, record) => record.address.includes(value),
	        sorter: (a, b) => a.address.length - b.address.length,
	        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
	    }]
		return(
			<div>
				<CustomBreadcrumb arr={['显示','表格']}/>
				<TypingCard source={cardContent} title="如何使用" height={178}/>
				<Card bordered={false} title="基本用法" style={{marginBottom: 10}} id='basicUsage'>
					<Table columns={columns} dataSource={data} style={styles.tableStyle}/>
				</Card>
				<Card bordered={false} title="可选择" style={{marginBottom: 10}} id='select'>
					<Table rowSelection={rowSelection} columns={columns2} dataSource={data2}/>
				</Card>
				<Card bordered={false} title="排序和筛选" style={{marginBottom: 10, minHeight: 762}} id='sort'>
					<p>
						<Button onClick={() =>this.setSort('age')}>年龄排序</Button>&emsp;
						<Button onClick={() =>this.setSort('name')}>人物排序</Button>&emsp;
						<Button onClick={this.clearFilters}>清空过滤规则</Button>&emsp;
						<Button onClick={this.clearAll}>重置</Button>&emsp;
					</p>
					<Table columns={columns3} dataSource={data3} style={styles.tableStyle} onChange={this.handleChange}/>
				</Card>
			</div>
		)
	}
}


const styles = {
  	tableStyle: {
    	width: '80%'
  	},
  	affixBox: {
    	position: 'absolute',
    	top: 100,
    	right: 50,
    	with: 170
  	}
}

export default TableDemo;