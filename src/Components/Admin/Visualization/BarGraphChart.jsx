import React from 'react';
import { Bar } from 'react-chartjs-2';
import dayjs from 'dayjs';
import 'chart.js/auto';
import { Card } from 'antd';

const BarGraphChart = ({ dataSource }) => {
  const localUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
  const users = [...(dataSource || []), ...localUsers];

  // Group users by district and count how many joined
  const districtCounts = users.reduce((acc, user) => {
    acc[user.district] = (acc[user.district] || 0) + 1;
    return acc;
  }, {});

  const sortedDistricts = Object.entries(districtCounts)
    .sort((a, b) => b[1] - a[1]) // sort descending
    .slice(0, 5); // top 5 districts

  const data = {
    labels: sortedDistricts.map(entry => entry[0]),
    datasets: [
      {
        label: 'Top Joining Districts',
        data: sortedDistricts.map(entry => entry[1]),
        backgroundColor: '#52c41a',
      },
    ],
  };

  const title = 'Top Joining Districts'
  return (
    <div style={{ padding: 20 }}>
      <h3>Top Joining Districts</h3>
      <Card title={title} className="shadow-lg">
        <div style={{ height: "300px" }}>
          {data.labels.length > 0 ? (
            <Bar data={data} />
          ) : (
            <p>No Home expenses found for {selectedMonth}.</p>
          )}
        </div>
      </Card>
    </div>
  );
};

export default BarGraphChart;
