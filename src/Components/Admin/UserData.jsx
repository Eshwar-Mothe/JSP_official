import React, { useState, useEffect } from 'react';
import { Table, Input, Space } from 'antd';

const sampleUsers = [
    {
      objectID: '1',
      fname: 'Eshwar',
      email: 'mothe.eshwar.em@gmail.com',
      mobile: '8125647154',
      district: 'Peddapalli',
      constituency: 'Ramagundam',
      village: 'Godavarikhani',
      pin: '505209',
    },
    {
      objectID: '2',
      fname: 'Ravi',
      email: 'ravi@example.com',
      mobile: '9876543210',
      district: 'Karimnagar',
      constituency: 'Manthani',
      village: 'Sundilla',
      pin: '505301',
    },
    {
      objectID: '3',
      fname: 'Kiran',
      email: 'kiran@example.com',
      mobile: '9000123456',
      district: 'Nizamabad',
      constituency: 'Armur',
      village: 'Kothapalli',
      pin: '503224',
    },
    {
      objectID: '4',
      fname: 'Anitha',
      email: 'anitha123@gmail.com',
      mobile: '9123456789',
      district: 'Nalgonda',
      constituency: 'Miryalaguda',
      village: 'Thipparthy',
      pin: '508001',
    },
    {
      objectID: '5',
      fname: 'Suresh',
      email: 'suresh.m@gmail.com',
      mobile: '9845123478',
      district: 'Warangal',
      constituency: 'Warangal West',
      village: 'Hanamkonda',
      pin: '506001',
    },
    {
      objectID: '6',
      fname: 'Lakshmi',
      email: 'lakshmi.rao@example.com',
      mobile: '9012345678',
      district: 'Medak',
      constituency: 'Siddipet',
      village: 'Gajwel',
      pin: '502278',
    },
    {
      objectID: '7',
      fname: 'Arjun',
      email: 'arjun_kumar@example.com',
      mobile: '9701234567',
      district: 'Adilabad',
      constituency: 'Nirmal',
      village: 'Basar',
      pin: '504101',
    },
    {
      objectID: '8',
      fname: 'Divya',
      email: 'divya.r@gmail.com',
      mobile: '7999123456',
      district: 'Mahabubnagar',
      constituency: 'Gadwal',
      village: 'Alampur',
      pin: '509152',
    },
    {
      objectID: '9',
      fname: 'Rakesh',
      email: 'rakesh_b@outlook.com',
      mobile: '9956781234',
      district: 'Khammam',
      constituency: 'Wyra',
      village: 'Nelakondapalli',
      pin: '507160',
    },
    {
      objectID: '10',
      fname: 'Sneha',
      email: 'sneha.patil@yahoo.com',
      mobile: '9104567890',
      district: 'Rangareddy',
      constituency: 'Ibrahimpatnam',
      village: 'Batasingaram',
      pin: '501512',
    },
    {
      objectID: '11',
      fname: 'Vamsi',
      email: 'vamsi_krishna@gmail.com',
      mobile: '8987654321',
      district: 'Suryapet',
      constituency: 'Huzurnagar',
      village: 'Nereducherla',
      pin: '508218',
    },
    {
      objectID: '12',
      fname: 'Meena',
      email: 'meena.desai@gmail.com',
      mobile: '9856231478',
      district: 'Jagitial',
      constituency: 'Korutla',
      village: 'Raikal',
      pin: '505460',
    },
    {
      objectID: '13',
      fname: 'Praveen',
      email: 'praveenreddy@live.com',
      mobile: '9834567123',
      district: 'Nalgonda',
      constituency: 'Devarakonda',
      village: 'Konda Mallepally',
      pin: '508248',
    },
  ];
  

const UserData = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      const localUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
    const combinedUsers = [...sampleUsers, ...localUsers];
    setAllUsers(combinedUsers);
    setFilteredData(combinedUsers);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = allUsers.filter((user) =>
      Object.values(user).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fname',
      key: 'fname',
      sorter: (a, b) => a.fname.localeCompare(b.fname),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
      sorter: (a, b) => a.mobile.localeCompare(b.mobile),
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: 'district',
      sorter: (a, b) => a.district.localeCompare(b.district),
    },
    {
      title: 'Constituency',
      dataIndex: 'constituency',
      key: 'constituency',
      sorter: (a, b) => a.constituency.localeCompare(b.constituency),
    },
    {
      title: 'Village',
      dataIndex: 'village',
      key: 'village',
      sorter: (a, b) => a.village.localeCompare(b.village),
    },
    {
      title: 'PIN',
      dataIndex: 'pin',
      key: 'pin',
      sorter: (a, b) => a.pin.localeCompare(b.pin),
    },
  ];

  return (
    <div style={{ padding: '24px' }}>
        <h4 className='text-center' style={{color:'#f00', fontWeight:500}}>JanaSena Members</h4>
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Input.Search
          placeholder="Search users..."
          allowClear
          value={searchTerm}
          onChange={handleSearch}
        />
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="objectID"
          pagination={{ pageSize: 5 }}
          scroll={{ x: 800 }}
        />
      </Space>
    </div>
  );
};

export default UserData;
