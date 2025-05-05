import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Select } from 'antd';
import dayjs from 'dayjs';
import 'chart.js/auto';

const { Option } = Select;

const LineChart = ({ dataSource }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Merge localStorage + prop data
  const mergedUsers = [
    ...(dataSource || []),
    ...(JSON.parse(localStorage.getItem('newUsers')) || [])
  ];

  useEffect(() => {
    const filtered = selectedMonth
      ? mergedUsers.filter(user =>
          dayjs(user.joinedAt || user.createdAt).format('YYYY-MM') === selectedMonth
        )
      : mergedUsers;
    setFilteredUsers(filtered);
  }, [selectedMonth]);

  const dataPerDay = {};
  filteredUsers.forEach(user => {
    const date = dayjs(user.joinedAt || user.createdAt).format('DD MMM');
    dataPerDay[date] = (dataPerDay[date] || 0) + 1;
  });

  const data = {
    labels: Object.keys(dataPerDay),
    datasets: [
      {
        label: 'Members Joined',
        data: Object.values(dataPerDay),
        borderColor: '#ff4d4f',
        backgroundColor: 'rgba(255,77,79,0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const availableMonths = [
    ...new Set(
      mergedUsers.map(user =>
        dayjs(user.joinedAt || user.createdAt).format('YYYY-MM')
      )
    ),
  ];

  return (
    <div style={{ padding: 20 }}>
      <h3>Members Joined Over Time</h3>
      <Select
        placeholder="Select Month"
        onChange={(val) => setSelectedMonth(val)}
        style={{ width: 200, marginBottom: 16 }}
      >
        {availableMonths.map(month => (
          <Option key={month} value={month}>
            {month}
          </Option>
        ))}
      </Select>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
