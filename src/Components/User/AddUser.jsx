"use client";

import React, { useState } from 'react';
import { BsInfo } from "react-icons/bs";
import { Button, Form, Input, Modal, Typography,message } from 'antd';

const { Title, Paragraph } = Typography;

const AddUser = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [messageApi, contextHolder] = message.useMessage()

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onFinish = (values) => {
        console.log("userEnteredValues",values)
        const userData = JSON.parse(localStorage.getItem('newUsers')) || []
        const isUserExist = userData.find(user => user.email === values.email || user.mobile === values.mobile )
        console.log(isUserExist)
        if(isUserExist){
            messageApi.warning("You are existing member",3)
            return console.log("User Already Exist try with new Data");
        }
        const newUser = {
            ...values,
            objectID: crypto.randomUUID(),
        };

        userData.push(newUser);
        localStorage.setItem('newUsers', JSON.stringify(userData));
        messageApi.success("Your Registeration was successful",3)


        form.resetFields();
    };

    return (
        <div style={{ padding: '24px', maxWidth: '600px', margin: 'auto' }}>
            {contextHolder}
            <Title level={3} style={{ textTransform: 'uppercase', color: 'red', fontWeight: 'bold' }}>
                JanaSena Joining Form
            </Title>

            <div style={{ textAlign: "right", fontSize: '30px' }}>
                <BsInfo style={{ color: "#f00", cursor: "pointer" }} onClick={showModal} />
            </div>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={{ district: '' }}
            >
                <Form.Item name="fname" label="Full Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="Enter Your Full Name" />
                </Form.Item>

                <Form.Item name="mobile" label="Mobile" rules={[{ required: true, message: 'Please enter your mobile number' }]}>
                    <Input type="tel" placeholder="Enter Your Mobile Number" />
                </Form.Item>

                <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                    <Input placeholder="Enter Your Email" />
                </Form.Item>

                <Form.Item name="district" label="District" rules={[{ required: true, message: 'Please enter your district' }]}>
                    <Input placeholder="Enter Your District" />
                </Form.Item>

                <Form.Item name="constituency" label="Constituency" rules={[{ required: true, message: 'Please enter your constituency' }]}>
                    <Input placeholder="Enter Your Constituency" />
                </Form.Item>

                <Form.Item name="village" label="Village/City" rules={[{ required: true, message: 'Please enter your village or city' }]}>
                    <Input placeholder="Enter Your Village/City" />
                </Form.Item>

                <Form.Item name="pin" label="Pincode" rules={[{ required: true, message: 'Please enter your pincode' }]}>
                    <Input type="text" placeholder="Enter Your Pincode" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ backgroundColor: "red", borderColor: "red", fontSize: '16px' }}>
                        Join
                    </Button>
                </Form.Item>
            </Form>

            {/* Modal for Benefits */}
            <Modal
                title={<span style={{ color: '#f00' }}>Registration Benefits</span>}
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Got It"
                okButtonProps={{
                    style: {
                        backgroundColor: 'red',
                        borderColor: 'red',
                        color: '#fff',
                        fontWeight: 700,
                    },
                }}
                styles={{
                    body: {
                        position: 'relative',
                        backgroundImage: 'url("/Logo.png")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        color: '#fff',
                        minHeight: '300px',
                        padding: '24px',
                    },
                }}
                style={{ top: 100 }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        zIndex: 0,
                    }}
                ></div>

                <Paragraph
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1rem',
                    }}
                >
                    ✅ Be part of the JanaSena political movement.<br />
                    ✅ Receive regular updates and notifications.<br />
                    ✅ Participate in events and community initiatives.<br />
                    ✅ Voice your local issues to the party.<br />
                    ✅ Gain access to exclusive volunteer programs.
                </Paragraph>
            </Modal>
        </div>
    );
};

export default AddUser;
