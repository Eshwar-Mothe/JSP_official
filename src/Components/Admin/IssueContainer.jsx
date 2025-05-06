import React, { useEffect, useState } from 'react';
import { Card, Button, Modal, Typography, Tag, Space } from 'antd';

const { Paragraph, Title } = Typography;

const sampleIssues = [
    {
        id: "1",
        name: "Eshwar",
        email: "eshwar@example.com",
        mobile: "8125647154",
        location: "Hyderabad",
        issue: "Overflowing drainage near residential area.",
        date: "2025-05-05T13:45:20.122Z"
    },
    {
        id: "2",
        name: "Ravi Kumar",
        email: "ravi.kumar@example.com",
        mobile: "9876543210",
        location: "Warangal",
        issue: "Street lights not working in several streets.",
        date: "2025-05-04T10:20:30.000Z"
    },
    {
        id: "3",
        name: "Lakshmi Devi",
        email: "lakshmi@example.com",
        mobile: "9638527410",
        location: "Karimnagar",
        issue: "Irregular water supply in the morning.",
        date: "2025-05-02T09:00:00.000Z"
    },
    {
        id: "4",
        name: "Arjun Reddy",
        email: "arjun.reddy@example.com",
        mobile: "9123456789",
        location: "Nizamabad",
        issue: "Garbage not collected for 3 days.",
        date: "2025-04-30T11:00:00.000Z"
    },
    {
        id: "5",
        name: "Sneha Rani",
        email: "sneha.rani@example.com",
        mobile: "9988776655",
        location: "Adilabad",
        issue: "Potholes causing accidents on main road.",
        date: "2025-04-29T08:30:00.000Z"
    },
    {
        id: "6",
        name: "Krishna",
        email: "krishna@example.com",
        mobile: "8899776655",
        location: "Siddipet",
        issue: "No electricity for past 6 hours.",
        date: "2025-04-28T14:15:00.000Z"
    },
    {
        id: "7",
        name: "Mounika",
        email: "mounika@example.com",
        mobile: "7778889990",
        location: "Khammam",
        issue: "Overflowing public dustbin near school.",
        date: "2025-04-27T10:45:00.000Z"
    },
    {
        id: "8",
        name: "Tarun",
        email: "tarun@example.com",
        mobile: "6655443322",
        location: "Nalgonda",
        issue: "Uncovered manhole on busy footpath.",
        date: "2025-04-26T09:20:00.000Z"
    },
    {
        id: "9",
        name: "Sita Ram",
        email: "sitaram@example.com",
        mobile: "9000012345",
        location: "Mahbubnagar",
        issue: "Water logging near market area.",
        date: "2025-04-25T15:00:00.000Z"
    },
    {
        id: "10",
        name: "Jyothi",
        email: "jyothi@example.com",
        mobile: "9012345678",
        location: "Karimnagar",
        issue: "Cattle roaming freely on roads causing jams.",
        date: "2025-04-24T17:10:00.000Z"
    },
    {
        id: "11",
        name: "Ashok",
        email: "ashok@example.com",
        mobile: "8123456780",
        location: "Medak",
        issue: "Noise pollution near residential areas due to illegal fireworks.",
        date: "2025-04-23T19:25:00.000Z"
    },
    {
        id: "12",
        name: "Ramesh",
        email: "ramesh@example.com",
        mobile: "7000112233",
        location: "Jagityal",
        issue: "Sewage leaking near school zone.",
        date: "2025-04-22T13:15:00.000Z"
    }
];

const IssueContainer = () => {
    const [issues, setIssues] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const loadIssues = () => {
        const stored = JSON.parse(localStorage.getItem('issues')) || [];
        const combined = [...stored, ...sampleIssues];

        // Deduplicate based on `id`
        const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());

        setIssues(unique);
    };

    useEffect(() => {
        loadIssues();

        const handleUpdate = () => loadIssues();

        window.addEventListener('issuesUpdated', handleUpdate);

        return () => {
            window.removeEventListener('issuesUpdated', handleUpdate);
        };
    }, []);

    const openModal = (issue) => {
        setSelectedIssue(issue);
        setIsModalOpen(true);
    };

    const handleResolve = (issue) => {
        messageApi.success("Issue Marked as Resolved")
    }

    const closeModal = () => {
        setSelectedIssue(null);
        setIsModalOpen(false);
    };

    return (
        <>

            <h4 className='text-center my-2' style={{ color: '#f00', fontWeight: 500 }}>Citizen Grievance Dashboard</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, paddingInline: 20, alignItems: 'center', justifyContent: 'center' }}>
                {issues.map(issue => (
                    <Card
                        key={issue.id}
                        title={issue.name}
                        className="issue-card"
                        hoverable
                        style={{
                            width: 350,
                            transition: 'transform 0.3s',
                            cursor: 'pointer'
                        }}
                        extra={<Tag color="volcano">New</Tag>}
                        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        <Paragraph ellipsis={{ rows: 2 }}>{issue.issue}</Paragraph>
                        <Paragraph type="secondary">{issue.location}</Paragraph>

                        <Space style={{ marginTop: 8 }}>
                            <Button onClick={() => openModal(issue)} size="medium">
                                View More
                            </Button>
                            <Button type="default" size="medium" style={{ color: 'green' }}>
                                 Resolve
                            </Button>
                            <Button type="default" size="medium" style={{ color: 'red' }}>
                                Reject
                            </Button>
                        </Space>
                    </Card>
                ))}

                <Modal
                    title="Issue Details"
                    open={isModalOpen}
                    onCancel={closeModal}
                    footer={null}
                >
                    {selectedIssue && (
                        <>
                            <Title level={5}>Reported by: {selectedIssue.name}</Title>
                            <p><strong>Email:</strong> {selectedIssue.email}</p>
                            <p><strong>Mobile:</strong> {selectedIssue.mobile}</p>
                            <p><strong>Location:</strong> {selectedIssue.location}</p>
                            <p><strong>Date:</strong> {new Date(selectedIssue.date).toLocaleString()}</p>
                            <p><strong>Issue:</strong><br />{selectedIssue.issue}</p>
                        </>
                    )}
                </Modal>
            </div>
        </>
    );
};

export default IssueContainer;
