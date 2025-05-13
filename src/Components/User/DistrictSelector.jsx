import React, { useMemo } from 'react';
import data from './data.json';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import './UserPage.css'

const { Title } = Typography;

const DistrictSelector = () => {
    const navigate = useNavigate();
    
    const districtNames = useMemo(() =>
        data.districts.map(d => Object.keys(d)[0]), []
    );

    const handleSelect = (district) => {
        navigate('/mandals', { state: { district } });
    };

    return (
        <>
            <Title level={3}>Select District</Title>
            <div style={{ padding: 24 }} className='buttons'>
                {districtNames.map((district) => (
                    <Button key={district} onClick={() => handleSelect(district)} style={{ margin: 8 }} className='button py-4 px-5'>
                        {district}
                    </Button>
                ))}
            </div>
        </>
    );
};

export default DistrictSelector;
