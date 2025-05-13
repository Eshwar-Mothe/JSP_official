import React, { useEffect, useState } from 'react';
import { Table, Typography, Avatar, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const SuccessPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('newUsers')) || [];
        const lastUser = users[users.length - 1];
        if (!lastUser) {
            navigate('/');
        } else {
            setUser(lastUser);
        }
    }, [navigate]);

    if (!user) return null;

    // Filtering general and nominee data
    const nomineeKeys = ['nominee_name', 'nominee_age', 'nominee_gender', 'nominee_relation', 'nominee_aadhar'];
    const generalData = Object.entries(user)
        .filter(([key]) => !nomineeKeys.includes(key))
        .map(([field, value], i) => ({
            key: i,
            field: field.replace(/_/g, ' ').toUpperCase(),
            value,
        }));

    const nomineeData = Object.entries(user)
        .filter(([key]) => nomineeKeys.includes(key))
        .map(([field, value], i) => ({
            key: i,
            field: field.replace(/_/g, ' ').toUpperCase(),
            value,
        }));

    const columns = [
        { title: 'Field', dataIndex: 'field', key: 'field' },
        { title: 'Value', dataIndex: 'value', key: 'value' },
    ];

    return (
        <div
            style={{
                background: 'url(/lgo.png) no-repeat center center fixed',
                backgroundSize: 'cover',
                minHeight: '100vh',
                padding: 48,
            }}
        >
            <Row justify="space-between" align="middle" style={{ marginBottom: 32 }}>
                <Col>
                    <img src="/Logo.png" alt="Logo" style={{ width: 100 }} />
                </Col>
                <Col>
                    <Avatar src="/pawankalyan.jpg" size={100} />
                </Col>
            </Row>

            <Title level={2} style={{ textAlign: 'center', color: 'green' }}>
                🎉 Registration Successful!
            </Title>
            <Title level={4} style={{ textAlign: 'center', color: 'black' }}>
                Payment Status: <span style={{ color: 'green' }}>Paid of ₹500</span>
            </Title>

            <Title level={4} style={{ marginTop: 40 }}>👤 User Details</Title>
            <Table
                columns={columns}
                dataSource={generalData}
                pagination={false}
                bordered
                style={{ backgroundColor: 'white', borderRadius: 8, marginBottom: 40 }}
            />

            <Title level={4}>🧾 Nominee Details</Title>
            <Table
                columns={columns}
                dataSource={nomineeData}
                pagination={false}
                bordered
                style={{ backgroundColor: 'white', borderRadius: 8 }}
            />
        </div>
    );
};

export default SuccessPage;
