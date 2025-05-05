"use client";

import React from 'react';
import { Card, Row, Col, Form, Input, Button, Typography, Avatar, Divider, message } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const localHeads = [
    {
        name: 'Ravi Teja',
        designation: 'Village President',
        email: 'raviteja@example.com',
        phone: '9876543210',
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
    },
    {
        name: 'Lakshmi Devi',
        designation: 'Mandal Coordinator',
        email: 'lakshmi@example.com',
        phone: '9876543211',
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
        name: 'Suresh Kumar',
        designation: 'District Head',
        email: 'suresh@example.com',
        phone: '9876543212',
        image: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
        name: 'Priya Reddy',
        designation: 'Women’s Wing Head',
        email: 'priya@example.com',
        phone: '9876543213',
        image: 'https://randomuser.me/api/portraits/women/21.jpg',
    },

];

const Support = () => {
    const [messageApi, contextHolder] = message.useMessage()
    const form = Form.useForm()

    const onFinish = (values) => {
        const newIssue = {
            ...values,
            id: crypto.randomUUID(), // generate a unique ID
            date: new Date().toISOString(),
        };
    
        const existingIssues = JSON.parse(localStorage.getItem('issues')) || [];
        existingIssues.push(newIssue);
        localStorage.setItem('issues', JSON.stringify(existingIssues));
    
        console.log('Issue Submitted:', newIssue);
        messageApi.success('Your issue has been submitted successfully!');
        form.resetFields();
    };

    return (
        <div style={{ padding: '24px', maxWidth: '1000px', margin: 'auto' }}>
            {contextHolder}
            <Title level={3} style={{ textAlign: 'center', color: 'red' }}>
                Public Support Center
            </Title>

            <Row gutter={24}>
                {/* Left - Local Heads */}
                <Col xs={24} md={10}>
                    <Title level={4}>Emergency Contacts</Title>
                    {localHeads.map((head, index) => (
                        <Card key={index} style={{ marginBottom: '.5rem' }}>
                            <Row align="middle">
                                <Col span={6}>
                                    <Avatar src={head.image} size={64} />
                                </Col>
                                <Col span={32}>
                                    <Paragraph strong>{head.name}</Paragraph>
                                    <Paragraph style={{ marginBottom: 0 }}>{head.designation}</Paragraph>
                                    <Col className='d-flex justify-content-between gap-5 my-2'>
                                        <Paragraph strong>{head.phone}</Paragraph>
                                        <Paragraph strong>{head.email}</Paragraph>
                                    </Col>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>

                {/* Right - Issue Form */}
                <Col xs={24} md={14}>
                    <Title level={4}>Post Your Issue</Title>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            name="name"
                            label="Your Name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input placeholder="Enter your name" />
                        </Form.Item>

                        <Form.Item name="mobile" label="Mobile" rules={[{ required: true, message: 'Please enter your mobile number' }]}>
                            <Input type="tel" placeholder="Enter Your Mobile Number" />
                        </Form.Item>

                        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                            <Input placeholder="Enter Your Email" />
                        </Form.Item>


                        <Form.Item
                            name="location"
                            label="Location"
                            rules={[{ required: true, message: 'Please enter your location' }]}
                        >
                            <Input placeholder="Village / Town / City" />
                        </Form.Item>

                        <Form.Item
                            name="issue"
                            label="Describe the Issue"
                            rules={[{ required: true, message: 'Please describe your issue' }]}
                        >
                            <Input.TextArea rows={4} placeholder="Write your issue in detail..." />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ backgroundColor: 'red', borderColor: 'red' }}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

            <Divider />

            {/* Footer with Email and Phone */}
            <Row justify="space-between" style={{ textAlign: 'center', marginTop: '16px' }}>
                <Col>
                    <a href="mailto:support@janasena.org">
                        <MailOutlined style={{ marginRight: 8 }} />
                        support@janasena.org
                    </a>
                </Col>
                <Col>
                    <a href="tel:1800123456">
                        <PhoneOutlined style={{ marginRight: 8 }} />
                        1800 123 456
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default Support;
