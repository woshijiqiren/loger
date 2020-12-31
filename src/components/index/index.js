import React, { Component } from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Search } = Input;
const onSearch = value =>{console.log(value);} 
export default class index extends Component {
    render() {
        return (
            <div className="main">
               <h1>12314</h1>
               <Search placeholder="输入关键词" onSearch={onSearch} enterButton />
            </div>
        );
    };
}


