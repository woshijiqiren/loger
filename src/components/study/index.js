import React, { Component } from 'react'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Layout, Menu,Avatar } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const { Search } = Input;
const onSearch = value => { console.log(value); }
const { Header, Content, Footer, Sider } = Layout;
export default class index extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            <Menu.Item key="1" icon={<UserOutlined />}>1</Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>2</Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>3</Menu.Item>
                            <Menu.Item key="4" icon={<BarChartOutlined />}>4</Menu.Item>
                            <Menu.Item key="5" icon={<CloudOutlined />}>5</Menu.Item>
                            <Menu.Item key="6" icon={<AppstoreOutlined />}>6</Menu.Item>
                            <Menu.Item key="7" icon={<TeamOutlined />}>7</Menu.Item>
                            <Menu.Item key="8" icon={<ShopOutlined />}>8</Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{ marginLeft: 200 }}>
                        
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}></div>
                        </Content>
                        
                    </Layout>
                </Layout>,
            
            </div>
        );
    };
}