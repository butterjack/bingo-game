import React, { useEffect } from 'react'
import {Form, Input, Checkbox, Button} from 'antd';
import { useNavigate } from "react-router-dom";


const Login = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        // we need some interaction with the dom to play the audio
        const audio = new Audio('./assets/show_1.mp3');
        document.addEventListener('click', event=>audio.play(),{once : true})
    }, [])

    const onFinish = values => {
        console.log('Success:', values);
        const audio = new Audio('./assets/i_like_what_you_got.mp3');
        audio.play()

        window.localStorage.setItem("isAuthenticated", true)
        navigate('/bingo')
    };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <img src="./assets/god.png" alt="Login"/>
                </div>
                <Form
                name="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                >
                    <p className="form-title">Welcome back</p>
                    <p>Get schiwfty! Login to the game</p>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                        placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password 
                        placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )


}

export default Login;