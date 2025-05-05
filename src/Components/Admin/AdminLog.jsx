import React, { useState } from 'react';
import { Form, Input, Button, Typography, message, Card, Modal, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import loginSamp from './admin.jpg';
import '../StyleSheets/AdminPage.css';
import { adminVerificationData } from '../ServiceLayer/api';

const { Title } = Typography;

const AdminLog = () => {
    const [form] = Form.useForm();
    const [otpModalVisible, setOtpModalVisible] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState(null);
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const handleGenerateOtp = async () => {
        const email = form.getFieldValue('email');
        const password = form.getFieldValue('password');
        if (email !== 'mothe.eshwar.em@gmail.com' || password !== "Eshwar@123") {
            messageApi.error('Only the authorized admin email can request OTP.');
            return;
        }
    
        const newOtp = Math.floor(100000 + Math.random() * 900000);
        setGeneratedOtp(newOtp);
    
        const payload = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: email,
                subject: 'OTP Verification',
                text: `Your OTP for verification is: ${newOtp}`,
            }),
        };
    
        const hide = messageApi.loading('Sending OTP...', 3);
    
        try {
            const response = await adminVerificationData(payload);
            hide(); 
    
            if (response.status === 200) {
                sessionStorage.setItem('admin_otp', newOtp);
                setOtpModalVisible(true);
                messageApi.success(`OTP has been sent to ${email}`);
            } else {
                messageApi.error('Failed to send OTP. Try again.');
            }
        } catch (error) {
            hide(); // Ensure to close loading
            console.error('OTP Error:', error);
            messageApi.error('An error occurred while sending OTP.');
        }
    };
    

    const handleOtpSubmit = (otpInput) => {
        const storedOtp = sessionStorage.getItem('admin_otp');
        if (otpInput === storedOtp) {
            messageApi.success('OTP verified successfully!');
            setOtpModalVisible(false);
        } else {
            messageApi.error('Invalid OTP. Please try again.');
        }
    };

    const handleLogin = (values) => {
        const { email, password } = values;
        const storedOtp = sessionStorage.getItem('admin_otp');
        if (!storedOtp) {
            messageApi.warning('Please verify OTP before login.');
            return;
        }

        if (email === 'mothe.eshwar.em@gmail.com' && password === 'Eshwar@123') {
            messageApi.success('Login successful!');
            navigate('/adminpanel');
        } else {
            messageApi.error('Incorrect admin credentials.');
        }
    };

    return (
        <div className="adminlog" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {contextHolder}
            <Card style={{ maxWidth: 450, width: '100%', textAlign: 'center' }} className='my-2'>
                <Avatar src={loginSamp} size={80} style={{ marginBottom: 16 }} />
                <Title level={3}>Admin Login</Title>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleLogin}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email' }]}
                    >
                        <Input placeholder="Enter admin email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password' }]}
                    >
                        <Input.Password placeholder="Enter admin password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="default" danger onClick={handleGenerateOtp} style={{ marginRight: 10 }}>
                            Generate OTP
                        </Button>
                        <Button 
                        htmlType="submit"
                        style={{ backgroundColor: '#f00', color: '#fff', borderColor: '#ff4d4f', fontWeight:700 }}
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            {/* OTP Modal */}
            <Modal
                title="Enter OTP"
                open={otpModalVisible}
                onCancel={() => setOtpModalVisible(false)}
                onOk={() => {
                    const otp = document.getElementById('otp-input')?.value;
                    handleOtpSubmit(otp);
                }}
                okText="Verify"
                okButtonProps={{ type: 'primary', danger: true }}
            >
                <Input id="otp-input" placeholder="Enter the OTP sent to your email" />
            </Modal>
        </div>
    );
};

export default AdminLog;
