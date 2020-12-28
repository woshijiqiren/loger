import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './login.css'
import { createHashHistory } from 'history';

const history = createHashHistory();
export default class login extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: ""
        }

    }

    login() {
        if (this.state.username !== "" && this.state.password !== "") {
            localStorage.setItem("name", this.state.username)
            history.push('/index');
        }
    }
    setId = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    setPwd = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    render() {
        const that = this
        return (
            <div className="main">
                <div className="avatar">
                    <Avatar size={100} src="" icon={<UserOutlined />} />
                </div>
                <div className="form">
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label="用户名"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input type="text" value={that.state.username} onChange={that.setId.bind(this)} />
                        </Form.Item>
                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password value={that.state.password} onChange={that.setPwd.bind(this)} />
                        </Form.Item>
                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>记住</Checkbox>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" onClick={this.login.bind(this)}>
                                登入
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    };

}


