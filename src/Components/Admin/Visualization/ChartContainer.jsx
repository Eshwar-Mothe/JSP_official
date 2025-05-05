import React from 'react'
import LineChart from './LineChart'
import DoughnutChart from './DoughnutChart'
import BarGraphChart from './BarGraphChart'
import { Layout } from 'antd'

const sampleUsers = [
    { id: '1', name: 'Ravi Teja', gender: 'male', district: 'Karimnagar', constituency: 'Manthani', village: 'Peddapalli', joinedAt: '2025-01-12' },
    { id: '2', name: 'Lakshmi Devi', gender: 'Female', district: 'Nalgonda', constituency: 'Suryapet', village: 'Kodad', joinedAt: '2025-02-18' },
    { id: '3', name: 'Suresh Kumar', gender: 'male', district: 'Warangal', constituency: 'Warangal East', village: 'Hanamkonda', joinedAt: '2025-01-20' },
    { id: '4', name: 'Priya Reddy', gender: 'Female', district: 'Karimnagar', constituency: 'Karimnagar', village: 'Vemulawada', joinedAt: '2025-03-05' },
    { id: '5', name: 'Naveen Rao', gender: 'male', district: 'Nizamabad', constituency: 'Bodhan', village: 'Armur', joinedAt: '2025-01-25' },
    { id: '6', name: 'Anjali Singh', gender: 'Female', district: 'Khammam', constituency: 'Khammam', village: 'Wyra', joinedAt: '2025-02-10' },
    { id: '7', name: 'Rajeev', gender: 'male', district: 'Adilabad', constituency: 'Asifabad', village: 'Mancherial', joinedAt: '2025-03-01' },
    { id: '8', name: 'Kavitha', gender: 'Female', district: 'Medak', constituency: 'Siddipet', village: 'Gajwel', joinedAt: '2025-01-30' },
    { id: '9', name: 'Vikram Reddy', gender: 'male', district: 'Mahbubnagar', constituency: 'Narayanpet', village: 'Makthal', joinedAt: '2025-03-12' },
    { id: '10', name: 'Bhavani', gender: 'Female', district: 'Rangareddy', constituency: 'Chevella', village: 'Shankarpally', joinedAt: '2025-02-25' },
    { id: '11', name: 'Ramesh', gender: 'male', district: 'Karimnagar', constituency: 'Karimnagar', village: 'Huzurabad', joinedAt: '2025-01-15' },
    { id: '12', name: 'Jyothi', gender: 'Female', district: 'Nalgonda', constituency: 'Nalgonda', village: 'Miryalaguda', joinedAt: '2025-02-14' },
    { id: '13', name: 'Shankar', gender: 'male', district: 'Warangal', constituency: 'Warangal West', village: 'Kazipet', joinedAt: '2025-03-20' },
    { id: '14', name: 'Deepika', gender: 'Female', district: 'Khammam', constituency: 'Palair', village: 'Madhira', joinedAt: '2025-01-17' },
    { id: '15', name: 'Ajay', gender: 'male', district: 'Medak', constituency: 'Medak', village: 'Sangareddy', joinedAt: '2025-02-05' },
    { id: '16', name: 'Latha', gender: 'Female', district: 'Adilabad', constituency: 'Adilabad', village: 'Nirmal', joinedAt: '2025-01-18' },
    { id: '17', name: 'Venkatesh', gender: 'male', district: 'Rangareddy', constituency: 'LB Nagar', village: 'Hayathnagar', joinedAt: '2025-03-10' },
    { id: '18', name: 'Sneha', gender: 'Female', district: 'Nizamabad', constituency: 'Nizamabad Rural', village: 'Armoor', joinedAt: '2025-02-12' },
    { id: '19', name: 'Harsha', gender: 'male', district: 'Mahbubnagar', constituency: 'Gadwal', village: 'Alampur', joinedAt: '2025-01-28' },
    { id: '20', name: 'Sindhu', gender: 'Female', district: 'Karimnagar', constituency: 'Huzurabad', village: 'Jammikunta', joinedAt: '2025-03-08' }
];
const ChartContainer = () => {
    return (
        <>
            <div className="container d-flex flex-wrap justify-content-between gap-3 my-2 chart-container">
                <Layout style={{ width: '40%', minHeight: '200px' }} className='text-center chart'>
                    <LineChart dataSource={sampleUsers} />
                </Layout>
                <Layout style={{ width: '40%', minHeight: '200px' }} className='text-center chart'>
                    <DoughnutChart dataSource={sampleUsers} />
                </Layout>
                <Layout style={{ width: '40%', minHeight: '200px' }} className='text-center chart'>
                    <BarGraphChart dataSource={sampleUsers} />
                </Layout>
            </div>

        </>
    )
}

export default ChartContainer
