import React, { useState } from 'react';
import { Select } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const { Option } = Select;

const DoughnutChart = ({ dataSource }) => {
  const localUsers = JSON.parse(localStorage.getItem('newUsers')) || [];
  const users = [...(dataSource || []), ...localUsers];

  const [district, setDistrict] = useState();
  const [constituency, setConstituency] = useState();
  const [village, setVillage] = useState();

  const districts = [...new Set(users.map(u => u.district))];
  const constituencies = [...new Set(users.filter(u => u.district === district).map(u => u.constituency))];
  const villages = [...new Set(users.filter(u => u.constituency === constituency).map(u => u.village))];

  const filtered = users.filter(u => {
    return (
      (!district || u.district === district) &&
      (!constituency || u.constituency === constituency) &&
      (!village || u.village === village)
    );
  });

  const genderData = filtered.reduce((acc, cur) => {
    acc[cur.gender] = (acc[cur.gender] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(genderData),
    datasets: [
      {
        data: Object.values(genderData),
        backgroundColor: ['#ff4d4f', '#1890ff'],
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>Gender Distribution</h3>
      <Select
        placeholder="Select District"
        onChange={val => {
          setDistrict(val);
          setConstituency();
          setVillage();
        }}
        style={{ width: 200, marginRight: 8 }}
        value={district}
      >
        {districts.map(d => <Option key={d}>{d}</Option>)}
      </Select>
      <Select
        placeholder="Select Constituency"
        onChange={val => {
          setConstituency(val);
          setVillage();
        }}
        value={constituency}
        style={{ width: 200, marginRight: 8 }}
        disabled={!district}
      >
        {constituencies.map(c => <Option key={c}>{c}</Option>)}
      </Select>
      <Select
        placeholder="Select Village"
        onChange={setVillage}
        value={village}
        style={{ width: 200 }}
        disabled={!constituency}
      >
        {villages.map(v => <Option key={v}>{v}</Option>)}
      </Select>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
