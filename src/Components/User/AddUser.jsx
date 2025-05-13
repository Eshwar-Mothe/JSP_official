import React, { useEffect } from 'react';
import { Button, Form, Input, Row, Col, Typography, message, DatePicker } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Title } = Typography;

const AddUserForm = () => {
    const [form] = Form.useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const { district, mandal, village, zip } = location.state || {};

    useEffect(() => {
        if (!district || !mandal || !village) {
            navigate('/');
            return;
        }
        form.setFieldsValue({
            district,
            constituency: mandal,
            village,
            zip,
        });
    }, [district, mandal, village, zip, form, navigate]);

    const onFinish = (values) => {
        const users = JSON.parse(localStorage.getItem('newUsers')) || [];
        users.push({ ...values, objectID: crypto.randomUUID() });
        localStorage.setItem('newUsers', JSON.stringify(users));
        message.success('Registration successful');
        navigate('/success');
    };

    return (
        <div style={{ padding: 24 }}>
            <Form layout="vertical" form={form} onFinish={onFinish}>
                <Title level={3} className='text-center' style={{ color: 'red' }}> Registration Form</Title>

                <Title level={4} style={{ marginTop: 32 }}>Personal Details</Title>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="fname" label="Full Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="dob" label="Date of Birth" rules={[{ required: true }]}>
                            <DatePicker style={{ width: '100%' }} />
                        </Form.Item>
                    </Col>

                    <Col span={12}>
                        <Form.Item name="aadhar" label="Aadhar Number" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="voterId" label="Voter ID" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="education" label="Education" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="maritalStatus" label="Marital Status" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                    </Col>
                </Row>

                <Title level={4} style={{ marginTop: 32 }}>Residential Details</Title>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="district" label="District">
                            <Input readOnly />
                        </Form.Item>
                        <Form.Item name="constituency" label="Constituency">
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                    <Col span={12}>

                        <Form.Item name="zip" label="ZIP Code" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="village" label="Village/City">
                            <Input readOnly />
                        </Form.Item>
                    </Col>
                </Row>

                <Title level={4} style={{ marginTop: 32 }}>Nominee Details</Title>
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item name="nominee_name" label="Nominee Name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="nominee_aadhar" label="Nominee Aadhar" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="nominee_mobile" label="Nominee Mobile" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="relation" label="Relation with Nominee" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="nominee_email" label="Nominee Email (if available)">
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item style={{ marginTop: 24 }}>
                    <Button htmlType="submit" type="primary" style={{ backgroundColor: 'red', borderColor: 'red' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddUserForm;
